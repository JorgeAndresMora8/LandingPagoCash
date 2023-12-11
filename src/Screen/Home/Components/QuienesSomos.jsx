import { ButtonIniciar } from "../../../Components/Buttons/ButtonIniciar"

function QuienesSomos() {
  return (
    <div className="containerCenter mediumGap backgroundCirculo" id="quienesSomos" style={{padding:'3rem 0px'}}>
           <div className="containerInfo alignStart ">
            <span className="spanText">Quienes Somos</span>
            <b className="title"><span className="beneficiosItemTitleHighlight">Servicio</span> De Pago</b>
            <p className="text">Ofrecemos una forma innovadora de manejar tu dinero. Podrás realizar cualquier operación en cualquier momento</p>
            <ButtonIniciar />
           </div>
           <div className="containerImage">
            <img src="/QuienesSomosImagen.png" style={{width:'100%', height:'100%'}} alt="" /></div> 
        </div>
  )
}

export default QuienesSomos