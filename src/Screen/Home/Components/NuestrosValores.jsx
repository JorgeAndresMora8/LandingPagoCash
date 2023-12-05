import { faAnglesUp, faHandHoldingDollar, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonIniciar } from '../../../Components/Buttons/ButtonIniciar'

function NuestrosValores() {
  return (
    <div className="nuestrosValoresContainer">
            <b className="nuestrosValoresTitle">Nuestros Valores</b>
            <div className="nuestrosValoresItemContainer">

                <div className="nuestrosValoresItem">
                    <FontAwesomeIcon className="fa-2x valoresIcons" style={{color:"blue"}}  icon={faAnglesUp} />
                    <b className="nuestrosValoresItemName">Innovacion</b>
                    <p className="nuestrosValoresItemText">Inovamos cada dia para traerte una plataforma actual y funcional</p>
                </div>

                <div className="nuestrosValoresItem">
                <FontAwesomeIcon className="fa-2x valoresIcons" style={{backgroundColor:'#47E272', color:'#fff'}} icon={faHandHoldingDollar} />
                    <b className="nuestrosValoresItemName">Servicio</b>
                    <p className="nuestrosValoresItemText">Ofrecemos un equipo capacito y listo para ayudarte a cada momento</p>
                </div>

                <div className="nuestrosValoresItem">
                <FontAwesomeIcon className="fa-2x valoresIcons" style={{backgroundColor:'#0E4A7C', color:'#fff'}} icon={faLock} />
                    <b className="nuestrosValoresItemName">Seguridad</b>
                    <p className="nuestrosValoresItemText">Utilizamos informacion encriptada para proteger la privacidad</p>
                </div>
            </div>
            <div className="nuestrosValoresWalletContainer">
                <div className="nuestrosValoresWalletHeader">
                <div className="nuestrosValoresWalletHeaderImage">
                <img src="/PagocashLogoWhite.png" style={{width:'70%', height:'auto'}} alt="" />
                    </div>
                    <div className="nuestrosValoresWalletHeaderContent">
                    <span>Unete Y Disfruta</span>
                    <b className='title' style={{color:'#fff'}}>Comieza a utilizar <br></br>nuestra wallet..</b>
                    </div>
                    
                </div>
                <div className="nuestrosValoresWalletContent">
                    <p>Junto a pagocash contamos con features y opciones que pueden ayudarte a la hora de manejar tu dinero de manera facil y segura. Tambien cuentas 
                        con la disponibilidad de enviar dinero a quien quieras que este registrado en la plataforma.
                    </p>
                    <div className="nuestrosValoresWalletContentButtonContainer">
                        <ButtonIniciar />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NuestrosValores