from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import csv
from difflib import SequenceMatcher

app = FastAPI(title="CampusFlow Backend")

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

CSV_FILE = "procedures.csv"


def load_data():
    data = []
    with open(CSV_FILE, newline="", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    return data



def similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()


@app.get("/search")
def search_procedure(q: str = Query(..., min_length=2)):
    results = []
    query = q.lower()

    data = load_data()

    for row in data:
        keyword = row["keyword"].lower()

        # fuzzy similarity score
        score = similarity(query, keyword)

        # threshold (tuneable)
        if score >= 0.6 or query in keyword:
            results.append(row)

    return results

