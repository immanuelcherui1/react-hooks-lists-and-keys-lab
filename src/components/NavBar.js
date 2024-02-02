import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    
    {links.map(navLink => <a key={navLink} href= {`#${navLink}`} >{navLink}</a>)}
        </nav>;
}

export default NavBar;
