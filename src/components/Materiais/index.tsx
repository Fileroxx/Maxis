import { Container } from 'react-bootstrap'
import styles from './styles.module.css'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

export default function Materiais() {

    useEffect(() => {
        AOS.init();
    })

    return(
        <div id={styles.materiais}>

            <div id="materiais">
         
            <Container>

            <h3 data-aos='fade-up'>Materiais Educacionais</h3>

            <p data-aos='fade-up'>
                Acreditamos que contribuir para novos
                negócios é o mesmo que contribuir para
                um mundo melhor. Pensando nisto, 
                criamos artigos que irão contribuir 
                para que você e seu negócio evoluam.
            </p>

        
            <div className={styles.cards}>

        <Link href="/blog">
                <div className={styles.card} data-aos='fade-up'>

                    <img width="100%" src="homem.png" alt=""/>

                    <p>
                    Como começar um negócio
                    na internet?
                    </p>

                </div>
        </Link>


        <Link href="/blog">  

                <div className={styles.card} data-aos='fade-up'>

                            <img width="100%" src="reuniao.png" alt=""/>

                            <p>
                            Preciso aumentar as minhas vendas, como?
                            </p>

                </div>
        </Link>


        <Link href="/blog">
                    <div className={styles.card} data-aos='fade-up'>

                    <img width="100%" src="mulher.png" alt=""/>

                    <p>
                    Como saber se seu negócio é escalável?
                    </p>

                    </div>
        </Link>


            </div>


            </Container>
            </div>

           
        </div>
    )
}