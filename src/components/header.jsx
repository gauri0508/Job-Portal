import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/logo.png" className="h-10" alt="logo" />
      </Link>
    </nav>
  );
};

export default Header;
