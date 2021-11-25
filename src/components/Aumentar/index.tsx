import { Container } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'

export default function Aumentar() {
    return(
        <div id={styles.detalhes}>

            <div id={styles.hero}>

            <img width="100%" src="vendasFull.png" alt=""/>

            </div>

       

             <div className={styles.detalhes}>
                 
             <Container>

                <h3>Quero aumentar minhas vendas, como faço?</h3>

                <p>
                Bom, acho que esse blog vai ser o mais lido da história do nosso Blog Maxis Plus, afinal, qual empreendedor que não sonha em vender sempre e muito, não é mesmo?
                <br/><br/>
                Se você se encaixa nesse perfil, então, este texto é exatamente pra você. Nele, preparamos boas dicas para te ajudar a alcançar resultados sólidos e avançar com seu negócio.
                <br/><br/>
                Neste blog, vamos focar em vendas pela internet, mas há princípios que podem ser aplicados a quaisquer tipos de negócio, combinado?
                <br/><br/>
                Vamos as dicas?
                
                </p>        


                <p>
                <strong>#1 – Site responsivo</strong>
                <br/><br/>
                Sim, você pode não ter se atentado a isto, mas um site que não é responsivo atrapalha, e muito, a experiência de compra do seu cliente. De maneira resumida, um site responsivo é aquele que a visualização é agradável ao cliente, independente do dispositivo que ele acessa. Seja por desktop, notebook, tablet, telefone ou quaisquer que seja o dispositivo, seu cliente terá uma experiência positiva, o que, certamente, contribui para o fechamento do negócio. É simples entender: seu site é bem visualizado independente de qual dispositivo o cliente acessa? Se a resposta for não, você precisa fazer esse ajuste imediatamente. Um site responsivo, além de gerar uma experiência melhor ao seu cliente também gera confiança que a empresa é real.
                <br/><br/>
                <strong>#2 – Redes Sociais</strong>
                <br/><br/>
                Nós sabemos que há pessoas que não gostam muito das redes sociais, seja por achar uma exposição desnecessária ou até mesmo considerá-las tóxicas, mas, há algo que você já sabe, mas não custa lembrar: suas preferências pessoais não são o seu negócio!
                <br/><br/>
                Atualmente as redes sociais tornaram-se uma ferramenta essencial para divulgar seu negócio, e estar fora dela é, certamente, um dos fatores que diminuem o impacto do seu negócio e faz com que as vendas não cresçam.
                <br/><br/>
                As redes sociais, por meio dos ADS (AdSense), ou seja, anúncios pagos, você consegue falar de maneira muito precisa com o público que você deseja alcançar, e isto, por si só, já é um grande diferencial.
                <br/><br/>
                Então, atente-se a este detalhe das redes sociais, crie um ambiente de interação com o público e veja seus resultados crescerem.
                <br/><br/>
                <strong>#3 – Market Place</strong>
                <br/><br/>
                Talvez você esteja pensando: eu venderia mais se tivesse condições de colocar a minha loja em um shopping ou em um grande centro de vendas, não é mesmo? Mas é aí que a Internet se torna uma ferramenta essencial.
                <br/><br/>
                Market Place é o espaço onde as empresas podem expor seus produtos e funciona como uma espécie de Shopping Center. É, então, uma reunião de varejistas em um único lugar que é sustentado “pela marca” do Market Place, como por exemplo, a Amazon.
                <br/><br/>
                Ao estar neste espaço, você tem a mesma amplitude que o Market Place, logo, sua empresa pode alcançar novos clientes e aumentar as vendas.
                <br/><br/>
                <strong>#4 – Up Selling e Cross Selling</strong>
                <br/><br/>
                Para aumentar suas vendas recorra a essas duas técnicas:
                <br/><br/>
                Up Selling – de maneira geral, usar a estratégia de Up Selling oferece, na hora do fechamento da compra por parte do cliente, itens complementares, atualizações ou aumento de tamanho. Você vê isso, por exemplo, em loja de fast food quando o caixa pergunta: gostaria de aumentar o tamanho da batata por apenas x reais?
                <br/><br/>
                Cross Selling – esta é a “venda de carona”, ou seja, você oferece ao seu cliente um produto que é relativo ao que ele já está adquirindo. Por exemplo: se o cliente entra na sua loja e compra uma chuteira de futebol, já fica claro que ele é praticante da modalidade, o cross selling faz a seguinte pergunta: o que mais tem a ver com esse hábito do cliente? Pronto, a partir dessas respostas você monta esta venda. Se comprou uma chuteira, possivelmente, precisará de meias, shorts, camisetas ou quaisquer coisas relacionadas a este esporte, entendeu?
                <br/><br/>
                Gostou das dicas? Aproveite e coloque essas dicas em prática e experimente um crescimento exponencial de suas vendas.
                <br/><br/>
                Bom, então é isso, a gente se encontra novamente no próximo blog.
                <br/><br/>
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