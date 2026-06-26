import { NavLink } from "react-router";
import navmenus from "../../json/nav.json";

export default function NavMenus() {
  return (
    <>
      {navmenus.map((navmenu) => (
        <li key={navmenu.id}>
          <NavLink to={navmenu.link}>{navmenu.title}</NavLink>
        </li>
      ))}
    </>
  );
}
