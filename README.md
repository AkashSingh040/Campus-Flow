# 🎓 CampusFlow – College Procedure Transparency Platform

CampusFlow is a web application that helps students understand **real college procedures** by showing **official rules** alongside **actual student experiences**.  
It addresses the gap between what is mentioned on college websites and what students face in practice.

---

## 📌 Problem Statement

College websites often describe procedures in a formal and ideal manner, but in reality:
- The actual steps may differ
- Timelines are often longer
- Informal or practical steps exist

This creates confusion and uncertainty among students.

**CampusFlow solves this problem** by presenting:
- ✅ Official procedure (as documented)
- ✅ Real student experience (practical reality)

Both are displayed together in a simple and searchable interface.

---

## 🚀 Features

- 🔍 Search-based college procedure lookup  
- 📄 Displays **Official Procedure vs Real Student Experience**
- 🧠 **Fuzzy search support** (handles typos and partial matches, e.g. `esamarth → Esamarth Issue`)
- 🎨 Clean, modern, and user-friendly UI
- ⚡ Fast backend using CSV-based structured data
- 🚫 Graceful handling of unknown procedures
- 🛠️ Designed to be upgraded with **AI (RAG)** in future

---

## 🧱 Tech Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript

### Backend
- FastAPI (Python)
- CSV file as lightweight data storage

### Tools & Platforms
- Git & GitHub
- VS Code

---


---

## 🔎 How It Works

1. The user enters a search query (e.g., *hostel leave*, *bonafide certificate*)
2. The backend performs:
   - Case-insensitive search
   - Fuzzy matching to handle spelling mistakes
3. Relevant procedure data is fetched from the CSV file
4. The frontend displays:
   - Official procedure
   - Real student experience
5. If no matching procedure exists, a friendly message is shown to the user

---

## ▶️ How to Run the Project Locally

### Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

### Frontend

```bash
cd frontend
npm install(first time only)
npm start


