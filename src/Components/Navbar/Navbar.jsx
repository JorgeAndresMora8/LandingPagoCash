import { useRef } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
	const navRef = useRef();
	
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="sticky">
			<span><a href="/#header"><img src="/PagocashLogo.png" style={{width:'50px'}} alt="" /></a></span>
			<nav ref={navRef}>
		<a onClick={showNavbar} href='/#nuestraApp'>Nuestra App</a>
		<a onClick={showNavbar}href='/#descarga'>Descarga</a>
		<a onClick={showNavbar} href='/#quienesSomos'>Quienes Somos</a>
		<a onClick={showNavbar} href='/#nuestrosValores'>Nuestros Valores</a>
		<a onClick={showNavbar} href='/#form'>Contacto</a>

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