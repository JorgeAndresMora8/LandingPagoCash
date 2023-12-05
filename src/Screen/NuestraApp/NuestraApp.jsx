import Header from "./Components/Header"
import ComoIniciar from "./Components/ComoIniciar"
import AppInfo from "./Components/AppInfo"
import AtencionCliente from "./Components/AtencionCliente"
// import DescargaLaApp from "./Components/DescargaLaApp"
import BeneficiosOfrecemos from "./Components/BeneficiosOfrecemos"
// import { Form } from "../../Components/Form/Form"


const NuestraApp = () => { 
    return ( 
        <>
        <Header />
        <AppInfo />
        <ComoIniciar />
        <AtencionCliente />
         <BeneficiosOfrecemos />
        {/* <DescargaLaApp /> */}
        {/* <Form /> */}
        </>
    )
}

export { 
    NuestraApp
}
