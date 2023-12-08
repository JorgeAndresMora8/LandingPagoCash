import { faBagShopping, faFileInvoice, faMobile, faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AppInfo() {
  return (
    <div className="containerCenter spaceBetweenContainer" id="nuestraApp">
            <div className="containerInfo alignStart">
                <div className="nuestraAppContentArea">
                <span><img src="/PagocashLogo.png" style={{width:'100px', height:'100px'}} alt="" /></span>
                <b className="title">Nuestra App</b>
                <p className="text">Pagocash es una wallet digital que ayuda a las personas a realizar transacciones de forma facil, segura y rapida. Contamos con una plataforma 
                que ofrece un sin fin de beneficios y nuevas formas de manejar tu dinero.</p>
                </div>
                <div className="containerCenter allSpace" style={{justifyContent:'space-between', padding:'15px 0px', flexDirection:'row'}}>
                    <div className="ContentIcons" style={{display:'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '1px 1px 1px px rgba(0, 0, 0, 0.2)'}}><FontAwesomeIcon className="fa-2x" style={{color:'#fff'}} icon={faMobile} /></div>
                    <div className="ContentIcons" style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}><FontAwesomeIcon className="fa-2x" style={{color:'#fff'}} icon={faMoneyBillTransfer} /></div>
                    <div className="ContentIcons" style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}><FontAwesomeIcon className="fa-2x" style={{color:'#fff'}} icon={faFileInvoice} /></div>
                    <div className="ContentIcons" style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}><FontAwesomeIcon className="fa-2x" style={{color:'#fff'}} icon={faBagShopping} /></div>
                </div>
            </div>
            <div className="containerImage">
            <img src="/PhoneMockUp.png" style={{width:'100%', height:'100%'}} alt="" /> 
            </div>
        </div>
  )
}

export default AppInfo