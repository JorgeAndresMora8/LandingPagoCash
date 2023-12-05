import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function NuestrosObjetivos() {
  return (
    <div className="allSpace containerCenter backgroundGradient" style={{padding:'5rem 0px'}}>
      <div className="longWiget flex columnDirection" style={{padding:'2rem 1rem',borderRadius: '1rem', border: '1px solid rgb(92 181 255)',backgroundColor:'#fff'}}>
        <b className="title nuestrosObjetivosTitle">Nuestros Objetivos</b>
        <div className='flex'>
        <div className="nuestrosObjetivoItem">
          <p><FontAwesomeIcon icon={faAnglesRight} style={{color:'rgb(92, 181, 255)'}}/> Queremos que manejes toda tu plata desde una app: fácil, gratis y segura.</p>
          <p><FontAwesomeIcon icon={faAnglesRight} style={{color:'rgb(92, 181, 255)'}}/> Queremos que mandes plata a quien quieras, cuando quieras.</p>
          <p><FontAwesomeIcon icon={faAnglesRight} style={{color:'rgb(92, 181, 255)'}}/> Queremos que analices todos tus gastos, para así ahorrar mejor.</p>
        </div>
        <div className="nuestrosObjetivoItem">
          <p><FontAwesomeIcon icon={faAnglesRight} style={{color:'rgb(92, 181, 255)'}}/> Queremos que compres lo que quieras, donde quieras..</p>
          <p><FontAwesomeIcon icon={faAnglesRight} style={{color:'rgb(92, 181, 255)'}}/> Queremos que recibas el mejor soporte, por redes sociales, Comunidad, mail o chat en vivo.</p>
          <p><FontAwesomeIcon icon={faAnglesRight} style={{color:'rgb(92, 181, 255)'}}/> La explicabo labore natus odit ipsam praesentium, laudantium at.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NuestrosObjetivos