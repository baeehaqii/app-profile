import Header from "../app/components/header";
import ProfileCard from "../app/components/ProfileCard";
import Footer from "../app/components/Footer";

const containerStyle = {
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.6",
};

const mainStyle = {
  padding: "1rem",
};

const infoStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
  paddingRight: "2rem",
};

const tentangSaya = {
  paddingRight: "5rem",
};

const contact = {
  paddingLeft: "5rem",
};

export default function Home() {
  return (
    <div style={containerStyle}>
      <Header />
      <main style={mainStyle}>
        <ProfileCard />
        <div style={infoStyle}>
          <div>
            <h3>Tentang saya</h3>
            <div style={tentangSaya}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div style={contact}>
            <h3>Hubungi Saya</h3>
            <p>Age: 24 years old</p>
            <p>Whatsapp: +62-8131-1351-XXX</p>
            <p>Email: bae@gmail.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
