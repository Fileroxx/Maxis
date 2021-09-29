import { Col, Container, Row } from 'react-bootstrap'
import Navbar from '../Navbar'
import NavbarMobile from '../NavbarMobile'
import styles from './styles.module.css'

export default function Main(){
    return(
        <div id={styles.main}>
            <Container>
                    
                <Navbar />
                <NavbarMobile />


                <Row>

                    <Col>

                    <div className={styles.texto}>

                    <h1>
                        Potencializando 
                        negócios para o mundo
                        </h1>

                        <p>

                        Projetos entregues em <span>todos os
                        continentes do planeta,</span> desenvolvendo
                        soluções para mercados
                        de constantes mudanças.

                        </p>


                    </div>


                    
                    </Col>


                    <Col></Col>

                </Row>


            </Container>
        </div>
    )
}