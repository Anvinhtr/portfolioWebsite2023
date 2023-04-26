import {userRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

function NavBar() {
    const navRef = userRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return ( 
        <header>
            <h3>Logo</h3>
            <nav ref = {navRef}>
                <a href="/#"> Home</a>
                <a href="/#"> Projects</a>
                <a href="/#"> Resume</a>
                <a href="/#"> Contact</a>
                <button className="nav-btn nav-close-btn" onClick ={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick ={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default NavBar; 