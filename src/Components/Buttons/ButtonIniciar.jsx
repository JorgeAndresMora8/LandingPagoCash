import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// eslint-disable-next-line react/prop-types
const ButtonIniciar = () => { 
    return( 
        <button className="buttonWallet">
            <FontAwesomeIcon style={{color:'blue'}} icon={faAnglesRight}/><a href="#form"> Inicia Ahora</a>
        </button>
    )
}

export { 
    ButtonIniciar
}