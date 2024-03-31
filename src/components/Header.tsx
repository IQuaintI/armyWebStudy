import "../css/Header.scss";
import logoImage from "../../public/Untitled.png";

interface HeaderProps {
  title?: string | JSX.Element;
  subtitle?: string;
  home?: string;
  sections: Array<{ link: string; title: string }>;
}

function Header({ title, subtitle, home, sections }: HeaderProps) {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {title || ""}
          </a>

          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <img src={logoImage} alt="ACS" className="logo" />
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                {subtitle || "Explore ACS"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    {home || "Home"}
                  </a>
                </li>
                {sections.map((section, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link" href={section.link}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
