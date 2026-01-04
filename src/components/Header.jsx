export default function Header(){
  return (
    <header className="header">
      <div className="header_div-first">
        <img
          className="header_div-first-img"
          src="/img/logo.png"
        />

        <nav className="header_div-first-nav">
          <a className="header_div-first-nav-a" href="#">
            Who we are
          </a>

          <a className="header_div-first-nav-a" href="#">
            Contacts
          </a>

          <a className="header_div-first-nav-a" href="#">
            Menu
          </a>
        </nav>
      </div>

      <div className="header_div-second">
        <button className="header_div-second-btn">Sign Up</button>

        <img
          className="header_div-second-img"
          src="/img/user.png"
        />
      </div>
    </header>
  );
};
    