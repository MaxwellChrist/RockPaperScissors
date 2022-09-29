import './RulesDisplay.css';
export default function RulesDisplay ({ handleClose, show }) {
  const showHideClassName = show ? "rules-shown" : "rules-hidden";
  return (
    <div className={showHideClassName}>
      <section className="rules-display-container">
        <div className="rules-display-subcontainer-grid">
            <h1>Rules</h1>
            <button type="button" onClick={handleClose}>&#x2715;</button>
            <img src="./images/image-rules.svg" alt="rules of the game" />
        </div>
      </section>
    </div>
  );
};