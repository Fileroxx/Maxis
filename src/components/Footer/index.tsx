import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'

export default function Footer() {
    return(
        <div id={styles.footer}>
            <Container>

                <Row>

                    <Col xs={12} lg={4}>
                        <img width="60%" src="logo.png" alt=""/>
                    </Col>


                    <Col xs={12} lg={4}>
                        <p>Todos os direitos reservados</p>
                    </Col>

                    <Col xs={12} lg={4}>

                        <div className={styles.icones}>

                        <a><img src="youtube.png" alt=""/></a>

                        <a><img src="instagram.png" alt=""/></a>

                        </div>

                    </Col>


                </Row>

            </Container>
        </div>
    )
}