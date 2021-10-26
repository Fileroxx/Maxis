import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.css';
import Link from 'next/link'
import Materiais from '../Materiais';



export default function Navbar(){
    return(
        <div id={styles.navbar}>
            <Container>

                <Row>

                    <Col>
                    
                        <div className={styles.logo}>
                            <Link href="/"><img src="logo.png" alt=""/></Link>
                        </div>
                    
                    </Col>


                    <Col>
                    
                        <div className={styles.links}>
                            <a style={{textDecoration: 'none', color: '#fff'}} href="#business">Qual o seu Business?</a>
                            <a style={{textDecoration: 'none', color: '#fff'}} href="#infografico">O que fazemos</a>
                            <a style={{textDecoration: 'none', color: '#fff'}} href="#materiais">Educação</a>
                            <Link href="/blog"><a style={{textDecoration: 'none', color: '#fff'}}>Blog</a></Link>
                        </div>
                    
                    </Col>


                </Row>

            </Container>
        </div>
    )
}