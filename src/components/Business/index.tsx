import { Button } from '@material-ui/core'
import { Container } from 'react-bootstrap'
import styles from './styles.module.css'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Business(){
    
    useEffect(() => {
        AOS.init();
    })
    
    return(
        
    <div id={styles.business}>

        <div id="business">


                <Container>

        <div className={styles.titulo} data-aos='fade-up'>
            <h3>Qual o seu business?</h3>
            <p>Desenvolvemos soluções para potencializar a sua ideia</p>
        </div>

        <div className={styles.imagem} data-aos='fade-right'>

            <img width="100%" src="desenvolvimento.png" alt=""/>

        </div>


        <div className={styles.cards}>

            <div className={styles.card} data-aos='fade-up'>

                <div className={styles.titulo}>
                    <h5>Startup</h5>
                    <img src="foguete.png" alt=""/>

                </div>


                <div className={styles.texto}>
                    <p>
                        Nós analisamos o potencial da sua ideia e
                        desenvolvemos um ambiente inteligente para
                        validação e aplicação     
                    </p>
                </div>

                <div className={styles.botaoContainer}>
                    <Button
                    className={styles.botao}
                    endIcon={<ArrowForwardRoundedIcon/>}
                    >
                            Saiba mais
                    </Button>
                </div>

            </div>






            <div className={styles.card} data-aos='fade-up'>

            <div className={styles.titulo}>
                <h5>Software</h5>
                <img src="caixinha.png" alt=""/>

            </div>


            <div className={styles.texto}>
                <p>
                Desenvolvemos softwares, aplicativos,
                sites e plataformas, 
                de maneira específica para o seu negócio  
                </p>
            </div>

            <div className={styles.botaoContainer}>
                <Button
                className={styles.botao}
                endIcon={<ArrowForwardRoundedIcon/>}
                >
                        Saiba mais
                </Button>
            </div>

            </div>







            <div className={styles.card} data-aos='fade-up'>

            <div className={styles.titulo}>
                <h5>Negócios Digitais</h5>
                <img src="coneccao.png" alt=""/>

            </div>


            <div className={styles.texto}>
                <p>
                Nosso time de especialistas tem expertise para
                desenvolver as estratégias necessárias para que
                seu negócio cresça no mundo digital    
                </p>
            </div>

            <div className={styles.botaoContainer}>
                <Button 
                endIcon={<ArrowForwardRoundedIcon/>}
                className={styles.botao}>
                        Saiba mais
                </Button>
            </div>

            </div>




        </div>

        </Container>


        </div>

     
        </div>
    )
}