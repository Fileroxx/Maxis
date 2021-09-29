import Apresentacao from "../components/Apresentacao";
import Business from "../components/Business";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import Infografico from "../components/Infografico";
import Main from "../components/Main";
import Materiais from "../components/Materiais";

export default function Home() {
  return(
    <>
        <Main />
        <Apresentacao />
        <Business />
        <Infografico />
        <Materiais />
        <Formulario />
        <Footer />
    </>
  )
}