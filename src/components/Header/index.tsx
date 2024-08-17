import Search from "../Search/Search";
import "./index.css";

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="container">
        <div className="logo">
          <h1>Karaoke Tube</h1>
        </div>
        <div className="search">
          <Search />
        </div>
      </div>
    </header>
  );
}
