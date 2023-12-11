import { Link } from "react-router-dom"

const Form = () => { 
    return ( 
        <>
		<div className="formContainer" id="form">
			<div className="formArea">
				<img src="/PagocashLogoWhite.png" className="pagocashLogoForm" alt="" />
			<b className="title" style={{color: '#fff'}}>Contactanos</b>
			<p className="text" style={{color:'#fff'}}>Si tiene alguna inquietud, no dude en dejarnos su mensaje</p>
			</div>
			
		<form className="cardForm">
			<div className="input">
			<label className="input-label">Nombre</label>
				<input type="text" className="input-field" required/>
			</div>
						<div className="input">
						<label className="input-label">Apellido</label>
				<input type="text" className="input-field" required/>
			</div>
						<div className="input">
						<label className="input-label">Email</label>
				<input type="textarea" className="input-field" required/>
			</div>
			<div className="input">
			<label className="input-label">Mensaje</label>
				<input type="textarea" className="input-field" required/>
			</div>
			<div className="action">
				<button className="buttonWallet">enviar</button>
			</div>
			<div className="card-info">
			<p style={{color:"#fff"}}>Mediante registrándose, está consciente de nuestros <Link to='/terminos-condiciones' style={{color:'#A7DDFA'}}>Términos y condiciones</Link></p>
		</div>
		</form>
	</div>
</>
    )
}

export { 
    Form
}