export default function Header({ isLoggedIn, username, onOpen, onLogOut }) {
  return (
    <header className="header">
      <div className="header_div-first">
        <img className="header_div-first-img" src="/img/logo.png" />
        <nav className="header_div-first-nav">
          <a className="header_div-first-nav-a" href="#">Who we are</a>
          <a className="header_div-first-nav-a" href="#">Contacts</a>
          <a className="header_div-first-nav-a" href="#">Menu</a>
        </nav>
      </div>
      <div className="header_div-second">
        {isLoggedIn ? (
          <>
            <span className="header_username">{username}</span>
            <button className="header_div-second-btn1" onClick={onLogOut}>Log Out</button>
          </>
        ) : (
          <button className="header_div-second-btn" onClick={onOpen}>Sign Up</button>
        )}
        <img className="header_div-second-img" src="/img/user.png" />
      </div>
    </header>
  );
};
