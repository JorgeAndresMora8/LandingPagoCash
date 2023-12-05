
const Footer = () => { 
    return( 
        <div className="containerCenter columnDirection allSpace darkBackgroundColor">
            {/*Footer Navigation*/}
            <div className="footerContainerNavigation">
                <div className="footerContainerNavigationImage">
                    <img src="/PagocashLogoWhite.png" className="allSpace" alt="" />
                </div>
                <div className="footerContainerNavigationNav">
                    <ul className="footerContainerNavigationList">
                    </ul>
                </div>
            </div>

            {/*Footer Navigation*/}
            <div className="footerContainerInformation">
                <div className="footerInfoDirection">
                    <p>Contáctanos a nuestro correo <span className="footerEmailHighLight">promixgroup@gmail.com</span></p>
                    <p>Panamá, ciudad de Panamá. Calle 48, PH seguros, planta baja.</p>
                </div>
                <div className="footerInfoSocialMedia">
                    <div>
                        
                    </div>
                   <p>Siguenos en nuestras redes sociales</p>
                </div>
            </div>

        <div className="copywritteFooterContainer">
            <b><span className="highLightCompanyNameFooter">Promix Group</span>. Todos los derechos reservados. </b>
        </div>
        </div>
    )
}

export { Footer}