import CookieConsent from "react-cookie-consent";

const CookieSign = () => { 
    return ( 
<CookieConsent
  location="bottom"
  buttonText="Acepto"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#001229" }}
  buttonStyle={{   
    backgroundColor: '#fff',
    padding: '8px 20px',
    fonFamily: '"poppins", sans-serif',
    fontWeight: 500,
    borderRadius: '1rem',
    fontSize: '0.8rem',
    border: '2px solid #000d1e', }}
  expires={150}
>
Nuestra pagina hace uso de Cookies para garantizarte la mejor experiencia.{" "}
  
</CookieConsent>
    )
}

export default CookieSign