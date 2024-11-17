import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header>
      <nav className="flex py-2">
        <a href="/">
          <img src={headerLogo} alt="This is header logo" />
        </a>
        <ul className="flex flex-1 justify-end">
          {navLinks.map((link) => (
            <li>
              <a className="px-2" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
