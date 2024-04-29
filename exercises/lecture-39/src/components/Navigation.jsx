import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="mb-6 flex justify-center">
      <ul className="mb-6 flex flex-row gap-5 ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
