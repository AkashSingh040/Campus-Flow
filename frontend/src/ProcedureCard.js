export default function ProcedureCard({ data }) {
  if (!data) return null;

  return (
    <div className="card">
      <h3>{data.keyword}</h3>

      <div className="section-title">Official Procedure</div>
      <div className="step">
        <span>1</span>
        <div>{data.official_procedure}</div>
      </div>

      <div className="section-title">Real Student Experience</div>
      <p>{data.real_procedure}</p>
    </div>
  );
}
