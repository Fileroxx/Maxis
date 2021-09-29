import { Container } from 'react-bootstrap'
import Footer from '../Footer'
import NavbarBlog from '../NavbarBlog'
import styles from './styles.module.css'

export default function DetalhesPage() {
    return(
        <div id={styles.detalhes}>
            <NavbarBlog />

            <div id={styles.hero}>

            <img width="100%" src="heroDetalhes.png" alt=""/>

            </div>

       

             <div className={styles.detalhes}>
                 
             <Container>

                <h3>Amet minim mollit non</h3>

                <p>
                    Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Amet minim mollit non 
                    deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit.
                    Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint. Velit 
                    officia consequat duis enim velit mollit. 
                </p>


                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor do amet sint. Velit officia consequat duis
                    enim velit mollit. Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint. Velit 
                    officia consequat duis enim velit mollit.  
                    Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Amet minim mollit non 
                    deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. 
                </p>


                <div className={styles.autor}>
                    <img src="autor.png" />

                    <div className={styles.texto}>
                        <p>Autor: Igor do Drop</p>
                        <p>Especialista em Negócios</p>
                    </div>                    

                </div>




                </Container>
             </div>   



             <div className={styles.adicional}>
                <Container>

                    <h3>Leia mais</h3>

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






            <Footer />
        </div>
    )
}