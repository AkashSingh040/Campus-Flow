import { useState } from "react";
import SearchBar from "./SearchBar";
import ProcedureCard from "./ProcedureCard";
import OfficeCard from "./OfficeCard";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const search = async (q) => {
    if (!q) return;

    const res = await fetch(`http://localhost:8000/search?q=${q}`);
    const data = await res.json();

    if (data.length === 0) {
      setResult(null);
      setNotFound(true);
    } else {
      setResult(data[0]);
      setNotFound(false);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>CampusFlow — Procedure Hub</h1>
        <p>Simplifying Your College Journey</p>
      </div>

      <SearchBar setQuery={search} />

      <div className="main">
        {notFound ? (
          <div className="card">
            <h3>Procedure Not Found</h3>
            <p>
              Sorry, this procedure is not defined yet.
              <br />
              It will be added in future updates.
            </p>
          </div>
        ) : (
          <ProcedureCard data={result} />
        )}

        <OfficeCard />
      </div>
    </div>
  );
}
