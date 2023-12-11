import ButtonApple from "../../../Components/Buttons/ButtonApple"
import ButtonPlayStore from "../../../Components/Buttons/ButtonPlayStore"

function Header() {
  return (
    <div className="HomeHeader" id="header">
      <div className="containerInfo">
        <h1 className="headerTitle">Ofrecemos Una <br /><span className="headerTitleHighLight">Solución Financiera.</span></h1>
        <p className="headerText">Realiza transacciones de forma segura y rápida. En cualquier lugar o momento.</p>
        <div className="btnHeaderContainer">
        <ButtonApple />
        <ButtonPlayStore />
        </div>
      </div>
      <div className="containerHeaderImageContainer">
        <img src="/HeaderImage.jpg" style={{width:'100%', height:'auto'}}  alt="" />
      </div>

    </div>
  )
}

export default Header