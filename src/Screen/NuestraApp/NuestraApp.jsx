import Header from "./Components/Header"
import ComoIniciar from "./Components/ComoIniciar"
import AppInfo from "./Components/AppInfo"
import AtencionCliente from "./Components/AtencionCliente"
import BeneficiosOfrecemos from "./Components/BeneficiosOfrecemos"


const NuestraApp = () => { 
    return ( 
        <>
        <Header />
        <AppInfo />
        <ComoIniciar />
        <AtencionCliente />
         <BeneficiosOfrecemos />
        </>
    )
}

export { 
    NuestraApp
}
