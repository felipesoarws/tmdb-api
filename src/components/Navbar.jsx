import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div>
      <nav id="navbar">
        <h2>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search a movie "
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
