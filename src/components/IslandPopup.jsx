export default function IslandPopup({ onClose }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        zIndex: 9999
      }}
    >
      <h2>Island Clicked!</h2>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          background: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => alert("Button inside popup clicked!")}
      >
        Click Me
      </button>
      <br />
      <button
        style={{
          padding: "5px 10px",
          marginTop: "10px",
          background: "#ccc",
          border: "none",
          cursor: "pointer"
        }}
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}
