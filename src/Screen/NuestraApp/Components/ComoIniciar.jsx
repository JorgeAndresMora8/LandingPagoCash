import { faCloudArrowDown, faHandHoldingDollar, faMobileButton } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonIniciar } from "../../../Components/Buttons/ButtonIniciar"

function ComoIniciar() {
  return (
    <div className="containerCenter columnDirection spaceBetweenContainer customDescargaLaApp mediumGap" id="descarga">
            <div className="alignStart longWiget">
                <b className="title">Como unirse a <span style={{color:"#0B4282"}}>Pagocash</span></b>
                <p className="text">Con estos simples pasos ya seras parte de Pagocash y disfrutaras de un sin fin de beneficios.</p>
                <div className="comoIniciarButtonArea">
                   <ButtonIniciar />
                </div>
            </div>
            <div className="containerCenter mediumGap">
                <div className="comoIniciarItem">
                    <div className="comoIniciarItemHeader">
                    <span><FontAwesomeIcon className="fa-3x" style={{color:'#0B4282'}} icon={faCloudArrowDown} /></span>
                    <b className="smallTitle">Descarga La App</b>
                    <p>Descarga la App en tu tienda de dispositivo que poseas.</p>
                    </div>
                </div>
                <div className="comoIniciarItem">
                    <div className="comoIniciarItemHeader">
                    <span><FontAwesomeIcon className="fa-3x" style={{color:'#0B4282'}} icon={faMobileButton} /></span>
                    <b className="smallTitle">Registrate</b>
                    <p>Registrate depositando tus datos pertinentes que seran empleados en la plataforma.</p>
                    </div>
                </div>
                <div className="comoIniciarItem">
                    <div className="comoIniciarItemHeader">
                    <span><FontAwesomeIcon className="fa-3x" style={{color:'#0B4282'}} icon={faHandHoldingDollar} /></span>
                    <b className="smallTitle">Transacciona</b>
                    <p>Empiaza a transaccionar y realizar operaciones con personas tambien registradas.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ComoIniciar