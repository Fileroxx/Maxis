import { Container } from 'react-bootstrap'
import styles from './styles.module.css'


export default function Materiais() {
    return(
        <div id={styles.materiais}>
            <Container>

            <h3>Materiais Educacionais</h3>

            <p>
                Acreditamos que contribuir para novos
                negócios é o mesmo que contribuir para
                um mundo melhor. Pensando nisto, 
                criamos artigos que irão contribuir 
                para que você e seu negócio evoluam.
            </p>


            <div className={styles.cards}>

                <div className={styles.card}>

                    <img width="100%" src="homem.png" alt=""/>

                    <p>
                    Como começar um negócio
                    na internet?
                    </p>

                </div>



                <div className={styles.card}>

                    <img width="100%" src="reuniao.png" alt=""/>

                    <p>
                    Preciso aumentar as minhas vendas, como?
                    </p>

                    </div>



                    <div className={styles.card}>

                    <img width="100%" src="mulher.png" alt=""/>

                    <p>
                    Como saber se seu negócio é escalável?
                    </p>

                    </div>



            </div>


            </Container>
        </div>
    )
}