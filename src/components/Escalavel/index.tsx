import { Container } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'

export default function Escalavel() {
    return(
        <div id={styles.detalhes}>

            <div id={styles.hero}>

            <img width="100%" src="escalavelFull.png" alt=""/>

            </div>

       

             <div className={styles.detalhes}>
                 
             <Container>

                <h3>Meu negócio é escalável?</h3>

                <p>
                Antes de descobrir se o seu negócio é escalável, é importante saber o que é considerado um negócio escalável, não é mesmo?
                <br/><br/>
                De maneira mais direta, podemos dizer que um negócio escalável é aquele onde é possível haver um crescimento rápido do negócio, sem que o custo da operação tenha crescimento semelhante, isto é, aumenta-se os resultados sem que os custos aumentem.
                <br/><br/>
                Esta já é uma boa direção para você pensar acerca do seu negócio e se ele é escalável, mas, fique tranquilo, há alguns pontos interessantes que vamos compartilhar contigo para que você possa fazer uma análise e ter essa resposta, vamos nessa?
                <br/><br/>
                Três dicas para que você possa verificar se seu negócio é escalável:
                </p>



                <p>
                <strong>#1 – Altamente replicável</strong>
                <br/><br/>
                Seu negócio, para ser considerado escalável precisa ser replicável e o que isso significa? Que haja facilidade em ser replicável devido aos padrões de trabalho, produção e produto/serviço que você oferece.
                <br/><br/>
                Um exemplo que pode te ajudar a compreender isso melhor é o sistema de franquias, percebe que uma franquia segue exatamente os itens anteriores? Pergunte a si mesmo se o seu negócio possui ou pode desenvolver os seguintes padrões:
                <br/><br/>
                · Trabalho;
                <br/><br/>
                · Produção;
                <br/><br/>
                · Produto e/ou serviço.
                <br/><br/>
                Se a resposta for sim, é possível que seu negócio esteja no caminho certo de ser escalável.
                <br/><br/>
                <strong># 2 – Demanda elevada no mercado</strong>
                <br/><br/>
                Isto é óbvio, porém, não tão simples. O caminho de um negócio escalável passa por entender o público e proporcionar a essas pessoas algo que de fato elas necessitam, percebendo, então, que seu produto/serviço atende uma demanda que ela ainda não encontrou no mercado. Claro que isto indica que você precisa sempre pensar em inovação e transformação, peças-chaves para que um negócio alcance o nível de ser escalado.
                <br/><br/>
                <strong># 3 – Recorrência</strong>
                <br/><br/>
                Um negócio escalável é um negócio que de maneira recorrente e crescente há demanda por parte dos clientes. Um produto que só se vende uma vez tende a ser limitado no tempo, afinal, se ele não gerar a necessidade e/ou desejo de ser adquirido novamente dificilmente será escalável, concordam?
                <br/><br/>
                Um exemplo prático disso é de um produto chamado telefone celular. Você reparou que a indústria de telefonia não para de crescer? E o que faz isso tornar-se escalável? São as atualizações e novidades que eles carregam em cada novo aparelho lançado. Aquilo que era para ser usado somente como um meio de comunicação ampliou, e muito, suas funcionalidades. O mais interessante é que esse desejo foi despertado no cliente e agora, qualquer novidade anunciada, mesmo que o cliente nunca mais vá usar, desperta o interesse de compra, aliás, você usa ou conhece todas as funcionalidades do seu telefone?
                <br/><br/>
                E aí, seu negócio é escalável?
                <br/><br/>
                Esperamos que essas dicas contribuam para que você possa desenvolver novos negócios e construir algo de muito sucesso e escalável.
                <br/><br/>
                Nos vemos novamente no nosso blog.
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