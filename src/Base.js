import Navbar from "./Navbar";

const Base = ({ children }) => {
  return (
    <div style={{
      backgroundColor: "rgba(48, 60, 110, 0.78)", // Dark Indigo with 85% opacity
      minHeight: "100vh",
      color: "white",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Navbar />
      <main style={{
        width: "90%",
        maxWidth: "1200px",
        padding: "20px",
        backgroundColor: "rgba(59, 73, 127, 0.61)", // Light translucent white container
        borderRadius: "10px"
      }}>
        {children} {/* This will render the page content */}
      </main>
    </div>
  );
};

export default Base;
