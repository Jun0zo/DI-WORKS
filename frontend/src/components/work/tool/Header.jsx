import headerBackground from "src/components/work/tool/header_background.jpeg";

const Header = () => {
  return (
    <div
      style={{
        height: "100%",
        backgroundImage: `url(${headerBackground})`,
      }}
    >
      <div>
        <h1>창의적 에세이</h1>
        전체진행률
      </div>
    </div>
  );
};

export default Header;
