import QuienesSomos from "./Components/QuienesSomos"
import InfoItemContainer from "./Components/InfoItemContainer"
import NuestrosValores from "./Components/NuestrosValores"
import NuestrosObjetivos from "./Components/NuestrosObjetivos"
import PlataformaFinanciera from "./Components/PlataformaFinanciera"
import { Form } from "../../Components/Form/Form"
import DescargaLaApp from "../NuestraApp/Components/DescargaLaApp"

const Home = () => { 
    return( 
        <>
        <QuienesSomos />
        <InfoItemContainer />
        <NuestrosObjetivos />
        <NuestrosValores />
        <PlataformaFinanciera />
        <DescargaLaApp />
        <Form />
        </>
    )
}

export { Home }
