import ButtonApple from "../../../Components/Buttons/ButtonApple"
import ButtonPlayStore from "../../../Components/Buttons/ButtonPlayStore"

function Header() {
  return (
        <div className="HomeHeader appHeader">
        <div className="homeHeaderContentContainer">
          <h1 className="title" style={{color:"#fff"}}><span className="title" style={{color:"#A5DBFF", textAlign:"center"}}>Maneja Tu Dinero</span><br /> De Forma Segura</h1>
          <p className="text" style={{color:"#fff"}}>Realiza transacciones de forma segura y rápida. 
  En cualquier lugar o momento</p>
          <div>
            <ButtonApple />
            <ButtonPlayStore />
          </div>
        </div>
      </div>
  )
}

export default Header