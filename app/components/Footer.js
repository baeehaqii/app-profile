export default function Footer() {
    return (
      <footer style={footerStyle}>
        <p>Ikuti saya</p>
        <div style={iconContainer}>
          <a href="https://github.com/baeehaqii" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" style={iconStyle} />
          </a>
          <a href="https://www.linkedin.com/in/muhamad-imam-baehaqi/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" style={iconStyle} />
          </a>
        </div>
      </footer>
    );
  }
  
  const footerStyle = {
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
  };
  
  const iconContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  };
  
  const iconStyle = {
    width: "30px",
    height: "30px",
  };
  