import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className="flex justiy-center gap-10">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
