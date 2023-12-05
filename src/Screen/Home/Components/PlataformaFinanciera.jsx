import { ButtonIniciar } from "../../../Components/Buttons/ButtonIniciar"

function PlataformaFinanciera() {
  return (
    <div className='containerCenter backgroundCircleTwo' style={{padding:'4rem 0px'}}>
        <div className="containerInfo alignStart">
            <span className="spanText">Plataforma Financiera</span>
            <b className="title">Una Servicio <br/><span>Facil Y Seguro</span></b>
            <p className="text">Queremos que manejes tu dinero desde la App. Ofreciendo balances de gastos, transacciones concretadas, operaciones de todo tipo de forma rapida, facil y segura..</p>
            <ButtonIniciar />
        </div>
        <div className="containerImage">
          <img src="/PhoneMockUp.png" style={{width:'100%', height:'100%'}} alt="" />
        </div>
    </div>
  )
}

export default PlataformaFinanciera