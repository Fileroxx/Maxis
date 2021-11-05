import { Col, Container, Row } from 'react-bootstrap'
import ParticleBackground from '../../ParticleBackground';
import Navbar from '../Navbar'
import NavbarMobile from '../NavbarMobile'
import styles from './styles.module.css'
import Head from 'next/head'
import { useEffect } from 'react';





export default function Main(){

    // useEffect(() => {
    //     const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    //     const styledMapContainer = document.querySelector('.styled_maps__container');
    //     const styledMapContainerDiv = document.querySelector('.styled_maps__container div');
        
    //     setTimeout(() => {
    //       styledMapContainerDiv.innerHTML = '';
        
    //       for (var i = 0; i < randomIntFromInterval(20, 500); i++) {
    //         styledMapContainerDiv.innerHTML += `<div className="styled_maps--dots" style="top: ${randomIntFromInterval(20, 69.99)}% ; left: ${randomIntFromInterval(20, 100)}% ;"></div>`;
    //       }
    //     }, 1);
    
        
    
    // }, []);


    return(

        <div id={styles.main}>

        <Head>

        <title>MaxisPlus - Potencializando negócios para o mundo</title>

        </Head>

       <div className={styles.dots}>

           <div className="styled_maps__container">

        <div>
        <div className="styled_maps--dots"></div>
        </div>

           </div>

           </div>
    
            
            <Container>
                    
                <Navbar />
                <NavbarMobile />



            <Row>    



        <Col lg={12}>

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
            O próximo negócio pode ser o seu!

            </p>


        </div>



        </Col>


        <Col>
        
        </Col>
        


        </Row>

{/* 
                        <ParticleBackground />         */}

            </Container>


        </div>
    );
}