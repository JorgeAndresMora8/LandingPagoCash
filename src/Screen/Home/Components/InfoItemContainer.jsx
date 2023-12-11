import { faBagShopping, faMobileButton, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function InfoItemContainer() {
  return (
    <div className="QuienesSomosItemContainer">
            <div className="QuienesSomosItem">
                <div className="headerItem">
                <span><FontAwesomeIcon className="fa-3x headerItemIcon" icon={faBagShopping}/></span>
                <b className="itemTitle">Compras</b>
                </div>
                <p className="itemText">Adquiere cualquier producto, artículo o servicios que desees.</p>
            </div>
            <div className="QuienesSomosItem">
                <div className="headerItem">
                <span><FontAwesomeIcon className="fa-3x headerItemIcon"   icon={faMoneyBillTransfer}/></span>
                <b className="itemTitle">Transfiere</b>
                </div>
                <p className="itemText">Envía o transacciona junto a los miles de usuarios registrados en la plataforma.</p>
            </div>
            <div className="QuienesSomosItem">
                <div className="headerItem">
                <span><FontAwesomeIcon className="fa-3x headerItemIcon"  icon={faMobileButton}/></span>
                <b className="itemTitle">Recarga</b>
                </div>
                <p className="itemText">Disponibilidad de recargas sobre cualquier línea telefónica.</p>
            </div>
        </div>
  )
}

export default InfoItemContainer