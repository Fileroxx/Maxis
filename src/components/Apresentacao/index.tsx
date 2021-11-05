import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/scrollbar"
import 'swiper/css/navigation'
import 'swiper/css/pagination'


import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


SwiperCore.use([Pagination]);

export default function Apresentacao(){

    useEffect(() => {
        AOS.init();
    });


    return(
        <div id={styles.apresentacao}>

            <Container data-aos='fade-up'>

                <div className={styles.texto} data-aos='fade-up'>

                    <h3>
                        A MaxisPlus
                    </h3>

                    <p>
                        Com expertise de mercado e mais de 15 anos inteligência de negócios somos uma potencializadora de negócios focada em crescimento por meio de inovação e tecnologia. Estamos presentes em projetos de mais de 100 clientes, em 16 países ao redor do mundo.
                    </p>

                </div>

            <div className={styles.card}>


            <Swiper 
            pagination={true}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },

                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },

                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },

            }}>

            <SwiperSlide>
            <div className={styles.n1}>

            <img src="foguete.png" alt=""/>

            <h5>Startups</h5>

            <p>em mais de 16 países</p>

            </div>
            <br/>
            </SwiperSlide>




            <SwiperSlide>
            <div className={styles.n1}>
                
            <img src="carrinho.png" alt=""/>

            <h5>E-commerce</h5>

            <p>
            para diversos
            segmentos
            </p>
            <br/>
            </div>

            </SwiperSlide>



            <SwiperSlide>
            <div className={styles.n1}>
                
            <img src="team.png" alt=""/>

            <h5>Um Squad</h5>

            <p>
            focado na sua
            ideia 
            </p>
            <br/>
            </div>
            <br/>
            </SwiperSlide>




            <SwiperSlide>
            <div className={styles.n1}>
                
            <img src="more.png" alt=""/>

            <h5>Projetos</h5>

            <p>digitais e físicos</p>

            </div>

            </SwiperSlide>


            <SwiperSlide>
            <div className={styles.n1}>
                
            <img src="tecnologia.png" alt=""/>

            <h5>Tecnologia</h5>

            <p>
                e segurança
                de ponta
            </p>

            </div>

            </SwiperSlide>


                </Swiper>




            </div>

            </Container>

        </div>
    )
}