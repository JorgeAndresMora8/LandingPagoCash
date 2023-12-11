import { faBagShopping, faFileInvoice, faMobile, faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonIniciar } from "../../../Components/Buttons/ButtonIniciar"

function BeneficiosOfrecemos() {
  return (
    <div className="containerCenter columnDirection bigGap spaceBetweenContainer beneficiosOfrecemosContainer" style={{backgroundColor:'#001023', padding:'4rem 0px'}}>
        <div className="beneficiosOfrecemosHeader">
            <b className="title" style={{color:'#fff'}}><span className="beneficiosItemTitleHighlight">Beneficios</span> Que Ofrecemos</b>
            <p className="text" style={{color:"#D7F1FF", margin:'10px 0px'}}>Únete hoy y se parte de esta plataforma que transformara tu vida 
y la manera en como manejar tu dinero.</p>
        </div>

    <div className="beneficiosOfrecemosItem">
         <div className="beneficiosOfrecemosItemImage">
        <img src="/PhoneCalling.png" className="allHeightWidth" alt="" /> 
     </div>
        <div className="beneficiosOfrecemosItemContent alignStart">
        <span><FontAwesomeIcon className="fa-2x beneficiosItemIcon" icon={faMobile} /></span>
            <b className="mediumTitle"><span className="beneficiosItemTitleHighlight">Recargas</span> Telefonicas</b>
            <p className="text">Realiza recargas a cualquier línea telefónica sobre números registrados.</p>
            <ButtonIniciar />
        </div>
    </div>

    <div className="beneficiosOfrecemosItem">
         <div className="beneficiosOfrecemosItemImage">
        <img src="/CompraVentaProductos.png" className="allHeightWidth" alt="" /> 
     </div>
        <div className="beneficiosOfrecemosItemContent alignStart" >
        <span><FontAwesomeIcon className="fa-2x beneficiosItemIcon" icon={faBagShopping} /></span>
            <b className="mediumTitle"><span className="beneficiosItemTitleHighlight">Compra Venta</span><br /> De Productos</b>
            <p className="text">Compra y vende todos tus productos favoritos en cualquier lugar o momento.</p>
            <ButtonIniciar />
        </div>
    </div>

                <div className="beneficiosOfrecemosItem">
         <div className="beneficiosOfrecemosItemImage">
        <img src="/PagoServicios.png" className="allHeightWidth" alt="" /> 
     </div>
        <div className="beneficiosOfrecemosItemContent alignStart" >
        <span><FontAwesomeIcon className="fa-2x beneficiosItemIcon" icon={faFileInvoice} /></span>
            <b className="mediumTitle"><span className="beneficiosItemTitleHighlight">Pago</span> De Servicios</b>
            <p className="text">Cancela todos tus gastos pertinentes por medio de nuestra opción de Pago De Servicios.</p>
            <ButtonIniciar />
        </div>
    </div>

    <div className="beneficiosOfrecemosItem">
         <div className="beneficiosOfrecemosItemImage">
        <img src="/EnvioDinero.png" className="allHeightWidth" alt="" /> 
     </div>
        <div className="beneficiosOfrecemosItemContent alignStart" >
        <span><FontAwesomeIcon className="fa-2x beneficiosItemIcon" icon={faMoneyBillTransfer} /></span>
            <b className="mediumTitle"><span className="beneficiosItemTitleHighlight">Envio</span> De Dinero</b>
            <p className="text">Realiza envios y transacciones a todos tus contactos registrados de forma rapida y segura.</p>
            <ButtonIniciar />
        </div>
    </div>
</div>
  )
}

export default BeneficiosOfrecemos