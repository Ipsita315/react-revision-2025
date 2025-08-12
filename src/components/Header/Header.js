import { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import useOnlineStatus from "../../utils/Hooks/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const isOnline = useOnlineStatus();
  return (
    <section className="cmp-header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSmqZv4gS1a4y-j-D7--f49SeCnj7b5PGzQ&s" className="cmp-header__logo"></img>
      <nav>
        <ul>
          <li>Online Status: <FaCircle color={isOnline ? "green" : "red"} /></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><button className="login-btn" onClick={() => {
            login === "Login" ? setLogin("Logout") : setLogin("Login")
          }}>{login}</button></li>
        </ul>
      </nav>
    </section>
  )
}

export default Header;