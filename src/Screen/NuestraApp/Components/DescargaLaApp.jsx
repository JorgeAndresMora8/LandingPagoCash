import ButtonApple from "../../../Components/Buttons/ButtonApple"
import ButtonPlayStore from "../../../Components/Buttons/ButtonPlayStore"

function DescargaLaApp() {
  return (
     <div className="containerCenter spaceBetweenContainer backgroundGradient">
     <div className="containerImage flex" >
        <img src="/PagocashLogo.png" style={{width:'50%', height:'50%'}} alt="" /> 
     </div>
     <div className="containerInfo">
         <b className="spanText">Estamos Disponibles <br/>
             <span className="title">Descarga La App</span></b>
         <p className="text">Descarga la App y disfruta un sin fin de beneficios que ofrecemos a nuestros usuarios en la plataforma.</p>
         <div className="buttonHeaderContainer">
            <ButtonApple />
            <ButtonPlayStore />
         </div>    
     
     </div>
 </div>
  )
}

export default DescargaLaApp