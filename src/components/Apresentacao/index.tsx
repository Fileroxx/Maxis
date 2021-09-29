import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/scrollbar"


import SwiperCore, { Scrollbar } from 'swiper'


SwiperCore.use([Scrollbar]);

export default function Apresentacao(){

    return(
        <div id={styles.apresentacao}>

            <Container>

                <div className={styles.texto}>

                    <h3>
                        A <span>Maxis</span>Plus
                    </h3>

                    <p>
                        Com expertise de mercado e mais de 15 anos 
                        inteligência de negócios a MAXISPLUS é uma
                        potencializadora de negócios focada em 
                        crescimento por meio de inovação e tecnologia.
                        Através de conhecimento e inteligência 
                        desenvolvemos estratégias para aplicação no seu
                        negócio, ou da sua ideia, construindo resultados 
                        exponenciais, com diferenciais que destacarão sua
                        ideia ou negócio no mercado. Acreditamos que 
                        isto é contribuir para um mundo melhor, de 
                        crescimento mútuo e tecnológico. 	 
                    </p>

                </div>


                <Swiper scrollbar={{
                    "hide": true
                }} className="mySwiper"
                >

                <SwiperSlide>

                    <div className={styles.card}>

                        <div className={styles.descricao}>

                            <img src="skype.png" alt=""/>

                            <p>
                                    Com expertise de mercado e mais de 15 
                                     anos inteligência de negócios a 
                                     MAXISPLUS é uma potencializadora de
                                     negócios focada em crescimento por meio
                                     de inovação e tecnologia. 
                            </p>

                        </div>

                    </div>

                </SwiperSlide>
            

                </Swiper>

            </Container>

        </div>
    )
}