export default function ProfileCard() {
    return (
      <div style={cardStyle}>
        <img
          src="/Foto.jpg"
          alt="Profile Picture"
          style={imageStyle}
        />
        <h2>Baehaqi</h2>
        <p>Full Stack Developer</p>
      </div>
    );
  }
  
  const cardStyle = {
    textAlign: "center",
    padding: "1.5rem",
    backgroundColor: "#f3f3f3",
    borderRadius: "10px",
  };
  
  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  };
  