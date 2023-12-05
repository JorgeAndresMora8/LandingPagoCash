import { useRef } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="sticky">
			<span><img src="/PagocashLogo.png" style={{width:'50px'}} alt="" /></span>
			<nav ref={navRef}>
        <Link to='/' >Quienes Somos</Link>
        <Link to='/app' >Nuestra App</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
            <FontAwesomeIcon icon={faX} style={{color:'#fff'}}/>
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FontAwesomeIcon icon={faBars} style={{color:'rgb(0,0,56)'}}/>
			</button>
		</header>
	);
}

export default Navbar;