import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Infografico(){

    useEffect(() => {
        AOS.init();
    })

    return(
        <div id={styles.infografico}>

            <div id="infografico">

            <Container>

            <div className={styles.cardInfo}>

            <div className={styles.titulo}>
                <h3 data-aos='fade-up'>O que fazemos?</h3>
            </div>

            <p data-aos='fade-up'>
            Acreditamos que com a tecnologia poderemos levar
            transformação e gerar oportunidades de crescimento 
            para qualquer tipo de negócio, inclusive o seu.
            Nosso processo é dividido em etapas e queremos te
            apresentar cada uma delas no infográfico a seguir:
            </p>



            <div className={styles.card} data-aos='fade-right'>

            <Row>

            <Col lg={2}>

                    <div className={styles.icone}>
                        <img width="100%" src="ideia.png" alt=""/>    
                    </div>   

            </Col>


            <Col lg={10}>
                    <div className={styles.texto}>

                        <h4>Ideia</h4>

                        <p>
                            Tudo começa a partir de uma ideia. Nos reunimos
                            para conhecer a ideia, conversar e entender 
                            melhor o que essa ideia tem que pode gerar 
                            inovação, escala e solidez.
                        </p>

                    </div>
            </Col>


            </Row>

            </div>








            <div className={styles.card } data-aos='fade-right'>

            <Row>

            <Col lg={2}>

                <div className={styles.icone}>
                    <img width="100%" src="pesquisa.png" alt=""/>    
                </div>   

            </Col>


            <Col lg={10}>
                <div className={styles.texto}>

                    <h4>Pesquisa de Mercado</h4>

                    <p>
                        A partir da ideia definida realizamos a análise
                        da viabilidade para o mercado, através de
                        ferramentas técnicas para identificar se esta
                        ideia tem ou não espaço no mercado.
                    </p>

                </div>
            </Col>


            </Row>

            </div>






            <div className={styles.card} data-aos='fade-right'>

            <Row>

            <Col lg={2}>

                <div className={styles.icone}>
                    <img width="100%" src="dados.png" alt=""/>    
                </div>   

            </Col>


            <Col lg={10}>
                <div className={styles.texto}>

                    <h4>Desenvolvimento</h4>

                    <p>
                        Nosso time de experts trabalha o desenvolvimento 
                        dessa ideia preparando tudo o que é necessário
                        para apresentar, um produto ou serviço aos 
                        clientes, usando das ferramentas de marketing,
                        tecnologia e gestão.

                    </p>

                </div>
            </Col>


            </Row>

            </div>






            <div className={styles.card} data-aos='fade-right'>

            <Row>

            <Col lg={2}>

                <div className={styles.icone}>
                    <img width="100%" src="rocket2.png" alt=""/>    
                </div>   

            </Col>


            <Col lg={10}>
                <div className={styles.texto}>

                    <h4>Lançamento ao Mercado</h4>

                    <p>
                    A partir da entrega do software desenvolvido,
                    apresentamos o projeto ao mercado, conectando
                    a players que podem potencialiar o uso e ao público
                    de interesse para uso da solução desenvolvida.
                    </p>

                </div>
            </Col>


            </Row>

            </div>








            <div className={styles.card} data-aos='fade-right'>

            <Row>

            <Col lg={2}>

                <div className={styles.icone}>
                    <img width="100%" src="checklist.png" alt=""/>    
                </div>   

            </Col>


            <Col lg={10}>
                <div className={styles.texto}>

                    <h4>Acompanhamento e Gestão</h4>

                    <p>
                    Realizado por meio de monitoramento constante
                    dos resultados de vendas e de marketing, 
                    acompanhamos e estamos sempre atentos a 
                    novidades para que o novo negócio esteja 
                    sempre em crescimento no mercado, atento as
                    novas oportunidades de alavancagem.

                    </p>

                </div>
            </Col>


            </Row>

            </div>




            </div>

            </Container>

            </div>


      

        </div>
    )
}