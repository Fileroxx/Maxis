import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer'
import NavbarBlog from '../NavbarBlog'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Blog(){
    return(
        <div id={styles.blog}>

        
        <NavbarBlog />

   


        <div className={styles.hero}>
        <Container>
            <Row>

                <Col xs={12} md={6}>
                    <h1>Conteúdos educacionais para o seu negócio</h1>
                </Col>

                <Col xs={12} md={6}></Col>

            </Row>
        </Container>

        </div>


    <Container>

        <h2>Ideias</h2>

    <div className={styles.cards}>

    <Link href="/comecar">

    <div className={styles.card}>

    <img width="100%" src="comecarCard.png" />

    <div className={styles.titulo}>

    <h5>
    Como começar um negócio
    na internet?
    </h5>

    </div>


    <div className={styles.texto}>
        <p>
        Vamos começar este texto com uma pergunta: você faz parte daquelas pessoas que desejam iniciar um...
        </p>
    </div>


    <div className={styles.info}>

        <p>
        25/11/2021
        </p>

        <p>
        Autor: Fausto Madeira
        </p>

    </div>



    </div>

</Link>



<Link href="/aumentar">


    <div className={styles.card}>

    <img width="100%" src="vendasCard.png" />
    
    <div className={styles.titulo}>

    <h5>
        Preciso aumentar as minhas vendas, como?
    </h5>

    </div>


    <div className={styles.texto}>
        <p>
        Bom, acho que esse blog vai ser o mais lido da história do nosso Blog Maxis Plus, afinal, qual empreendedor...
        </p>
    </div>


    <div className={styles.info}>

        <p>
        25/11/2021
        </p>

        <p>
        Autor: Fausto Madeira
        </p>

    </div>
    


    </div>

</Link>






<Link href="/escalavel">
    <div className={styles.card}>

    <img width="100%" src="escalavelCard.png" />

    <div className={styles.titulo}>

    <h5>
    Como saber se seu negócio é escalável?
    </h5>

    </div>


    <div className={styles.texto}>
        <p>
        Antes de descobrir se o seu negócio é escalável, é importante saber o que é considerado um escalável...
        </p>
    </div>



    <div className={styles.info}>

        <p>
        25/11/2021
        </p>

        <p>
        Autor: Fausto Madeira
        </p>

    </div>



    </div>

</Link>




    </div>











    <h2>Negócios</h2>

    <div className={styles.cards}>

    <Link href="/negociosDigitais">
    
    <div className={styles.card}>

    <img width="100%" src="fotoBlog.png" />
    
    <div className={styles.titulo}>

    <h5>
    Negócios Digitais
    </h5>

    </div>


    <div className={styles.texto}>
        <p>
        A internet trouxe inúmeras novas possibilidades para fazer as coisas, desde...
        </p>
    </div>

    
    <div className={styles.info}>

        <p>
        25/11/2021
        </p>

        <p>
        Autor: Fausto Madeira
        </p>

    </div>
    


    </div>
    
    </Link>





    <Link href="/startup">
    
    <div className={styles.card}>

    <img width="100%" src="startupCard.png" />
    
    <div className={styles.titulo}>

    <h5>
    Startup
    </h5>

    </div>


    <div className={styles.texto}>
        <p>
        Começamos esse blog com uma afirmação que você certamente...
        </p>
    </div>

    
    <div className={styles.info}>

        <p>
        25/11/2021
        </p>

        <p>
        Autor: Fausto Madeira
        </p>

    </div>
    


    </div>
    
    </Link>



  



    </div>



















        <h2>Tendências</h2>

    <div className={styles.cards}>

    <Link href="/software">
    
    <div className={styles.card}>

    <img width="100%" src="softwareCard.png" />
    
    <div className={styles.titulo}>

    <h5>
    Software
    </h5>

    </div>


    <div className={styles.texto}>
        <p>
        Conjunto de instruções que devem ser seguidas e 
        executadas por um mecanismo...
        </p>
    </div>

    
    <div className={styles.info}>

        <p>
        25/11/2021
        </p>

        <p>
        Autor: Fausto Madeira
        </p>

    </div>
    


    </div>
    
    </Link>


    </div>        





    </Container>


    <Footer />  


        </div>
    )
}