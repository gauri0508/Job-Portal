import { Link } from "react-router-dom";
import './header.css';
import { Button } from "./ui/button";


const Header = () => {
  return (
    <nav className="py-4 flex justify-between items-center">
      <Link to="/">
      <img src="/logo.png" class="logo" />
      </Link>

      <Button variant="outline">Login</Button>
      {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
    </nav>
  );
};

export default Header;
