import { Box, Button, TextField } from '@material-ui/core'
import { Col, Container, Form, Row } from 'react-bootstrap'
import styles from './styles.module.css'

export default function Formulario() {
    return(
        <div id={styles.formulario}>
            <Container>

                <div className={styles.cardInfo}>
                    <Row>
                        <Col xs={12} lg={6}>

                            <h3>
                                Tem uma ideia?
                                Vamos conversar
                            </h3>

                            <p>
                                Apresente aqui sua ideia. Nossa equipe 
                                vai analisar e se tiver alinhamento com
                                nossa expertise, entraremos em contato 
                                para uma reunião.
                            </p>
                        
                        </Col>
                    
                        <Col xs={12} lg={6}>

                        <Form>

                        <Form.Control size="lg" type="text" placeholder="Nome" required />
                        <br />
                        <Form.Control size="lg" type="text" placeholder="E-mail" required />
                        <br />
                        <Form.Select size="lg">
                        <option>Seu negócio</option>
                        </Form.Select>

                        <Button type="submit" fullWidth size="large"  className={styles.botao}>
                            Enviar
                        </Button>

                        </Form>
                            


                        </Col>


                    </Row>
                </div>

            </Container>
        </div>
    )
}