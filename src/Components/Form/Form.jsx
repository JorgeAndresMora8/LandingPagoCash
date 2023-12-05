
const Form = () => { 
    return ( 
        <>
		<div className="formContainer" id="form">
			<div style={{width:'80%', height:'auto', display:'flex', justifyContent:'center', alignItems:'center', margin:'3rem 0px', flexDirection:'column'}}>
				<img src="/PagocashLogoWhite.png" style={{width:'70px'}} alt="" />
			<b className="title beneficiosItemTitleHighlight">Contactanos</b>
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
			{/* <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p> */}
			<p style={{color:"#fff"}}>Mediante registrándose, está consciente de nuestros <a href="#" style={{color:'#A7DDFA'}}>Terminos y condiciones</a></p>
		</div>
		</form>
	</div>
</>
    )
}

export { 
    Form
}