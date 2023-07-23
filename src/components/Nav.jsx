import React from "react";

import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


const Nav =({onSearch})=>{
    return(
     
        <div>
            <Link to="/" class="Logout">Log out</Link>
            <Link to="/About">About</Link>
            <Link to="/Home">Home</Link>
            <Link to="/Favorites">Favorites</Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}
export default Nav;