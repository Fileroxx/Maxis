import { Container } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'



export default function Software() {
    return(
        <div id={styles.detalhes}>

            <div id={styles.hero}>

            <img width="100%" src="softwareFull.png" alt=""/>

            </div>

       

             <div className={styles.detalhes}>
                 
             <Container>

                <h3>Software</h3>

                <p>
                E aí, tudo bem?
                <br/><br/>
                Sabe por que você está acessando esse conteúdo, seja pelo celular, tablet, notebook ou qualquer dispositivo que você está usando?
                <br/><br/>
                Porque você possui um conjunto de softwares executando diversas rotinas, que enviam comandos em milissegundos e fazer o hardware executar determinada ação. Basicamente o software é o cérebro e o hardware é o “corpo” do seu dispositivo eletrônico.
                <br/><br/>
                Conceitualmente, Software e Hardware significam:         
                </p>

            
                <p>
                <strong>Software</strong> – conjunto de instruções que devem ser seguidas e executadas por um mecanismo, seja ele um computador, ou qualquer aparato eletromecânico. É a forma geral de nomear programas, aplicativos, firmware, enfim, tudo que faz, de fato, seu equipamento funcionar.
                <br/><br/>
                <strong>Hardware</strong> - é a parte física do computador, ou seja, peças e equipamentos que fazem o computador funcionar. O termo também se refere ao conjunto de equipamentos acoplados em produtos que necessitam de gerenciamento computacional.

                </p>

                <h4>
                 Softwares e seu negócio:
                </h4>

                <p>
                Os softwares são parte importantíssima para que seu negócio cresça e atinja melhores resultados. Com eles sua gestão do negócio, resultado de vendas e relacionamento com cliente alcança excelente resultados se você tentasse fazer as mesmas atividades manualmente, além de, é claro, o Software reduz, e muito, o tempo de execução de tarefas.
                <br /> <br/>
                Alguns exemplos de tipos de softwares que contribui para o sucesso do seu negócio: 
                </p>



                <h4>Software de gestão:</h4>

                <p>
                Basicamente um software de gestão organiza o funcionamento do seu negócio, bem como as documentações, sejam financeiras, contábeis, tributárias ou outras necessárias.
                O grande benefício que um software de gestão traz para seu negócio é a otimização de acesso as informações, acesso as informações da empresa em qualquer momento, otimização de tempo e aumento da produtividade.
                Antigamente era necessário que esses softwares fossem instalados diretamente em um servidor, dentro de sua rede, mas, atualmente, eles podem ser acessados diretamente na nuvem, o que me muitos casos reduz o custo de se ter um software de gestão.               
                </p>


                <h4>Aplicativos:</h4>

                <p>
                Sabe quando você está com fome, pega seu celular, e faz um pedido de alguma coisa para comer? Isto é um aplicativo. Os aplicativos são software desenvolvimento, quase na sua totalidade, para dispositivos móveis, como celulares e tablets, por exemplo. O que era, na maioria das vezes, uma ferramenta de entretenimento, hoje, é uma grande ferramenta para crescimento do seu negócio. Os aplicativos são, geralmente, intuitivos e com uma interface amigável para o usuário. Diante disto, um aplicativo transforma sua loja em uma loja aberta 24h, permitindo que você e seu negócio continue a vender, mesmo “fora do horário do expediente”.     
                
                Além disso, há ainda sites, plataformas e uma infinidade de facilidades que os softwares geram para que você possa focar no desenvolvimento do seu negócio, criação de novas soluções para atender seus clientes e aumentar os resultados do seu negócio.
                <br /> <br/>
                Bora aproveitar essa leitura e dar uma olhadinha o que você pode usufruir dos benefícios que bons softwares, ou, quem sabe ter uma Big Idea e resolver dores de clientes e desenvolver um novo negócio?
                <br/> <br/>
                Falando em Big Idea, você sabe o que é?
                <br/> <br/>
                Então, não perca nossos próximos textos no blog.
                <br/> <br/>
                Até a próxima!
                </p>

                <div className={styles.autor}>
                    <img src="fausto.png" />

                    <div className={styles.texto}>
                        <p>Autor: Fausto Madeira</p>
                        <p>Especialista em Negócios</p>
                    </div>                    

                </div>




                </Container>
             </div>   



             <div className={styles.adicional}>
                <Container>

                    <h3>Leia mais</h3>

                    <div className={styles.cards}>
     
        <Link href="/comecar">

             <div className={styles.card}>

            <img width="100%" src="homem.png" alt=""/>

            <p>
            Como começar um negócio
            na internet?
            </p>

            </div>

        </Link>



        <Link href="/aumentar">
        
            <div className={styles.card}>

            <img width="100%" src="reuniao.png" alt=""/>

            <p>
            Preciso aumentar as minhas vendas, como?
            </p>

            </div>

        </Link>



        <Link href="/escalavel">
  
            <div className={styles.card}>

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