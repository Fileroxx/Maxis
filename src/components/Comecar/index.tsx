import { Container } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'

export default function Comecar() {
    return(
        <div id={styles.detalhes}>

            <div id={styles.hero}>

            <img width="100%" src="escalavelFull.png" alt=""/>

            </div>

       

             <div className={styles.detalhes}>
                 
             <Container>

                <h3>Como começar um novo negócio?</h3>

                <p>

                Vamos começar este texto com uma pergunta: você faz parte daquelas pessoas que desejam iniciar um novo negócio?
                <br/><br/>
                Se sim, possivelmente você pode ter desanimado em colocar essa ideia em prática, afinal, é tanta burocracia que acaba desanimando, não é mesmo?
                <br/><br/>
                A boa notícia é que com a Internet isto teve uma mudança imensa, facilitando para que você comece um novo negócio, porém, essa notícia pode se tornar algo não tão bom assim, afinal, se o empreendedor confundir essa facilidade com a não necessidade de foco e dedicação pode ver o sonho do negócio próprio ir por água abaixo.
                <br/><br/>
                Pensando nisto, preparamos algumas dicas que consideramos importantes para que seu sonho de empreender não se torne um pesadelo.
                <br/><br/>
                Preparados?

                </p>

                <p>
                <strong>#1 – Planejamento</strong>
                <br/><br/>
                Seja na internet ou nos meios tradicionais, não inicie nenhum projeto sem fazer um planejamento. Há muitas situações que você precisa ponderar para iniciar seu negócio. A ferramenta ideal para você usar nesse processo é um plano de negócios. O plano de negócios considera alguns pontos essenciais para que seu negócio tenha uma direção estabelecida e não se perca durante o processo:
                <br/><br/>
                · Fornecedores;
                <br/><br/>
                · Preço de venda do produto e/ou serviço;
                <br/><br/>
                · Formas de pagamento;
                <br/><br/>
                · Custos fixos e variáveis;
                <br/><br/>
                · Pesquisar a concorrência.
                <br/><br/>
                
                <strong>#2 – Identificar o público-alvo</strong>
                <br/><br/>
                Tão importante quando começar seu negócio é saber pra quem você vai vender. Apesar de ser o desejo de todo mundo vender pra qualquer um, esta não é uma realidade acessível, além disso, achar que pode-se vender pra todo mundo acaba te fazendo vender pra ninguém, porque as demais empresas estão especializando-se em vender de maneira mais precisa para seu público.
                <br/><br/>
                Para identificar seu público-alvo você deve criar a persona do seu negócio, que nada mais é que identificar o tipo de cliente perfeito para o seu negócio. Com esta persona criada, você vai identificar as dores e assim tornar-se essencial para esse cliente.
                <br/><br/>
                <strong>#3 – Qualidade de serviço</strong>
                <br/><br/>
                Em um mundo onde todo mundo faz de tudo, diferencia-se quem presta o serviço com qualidade. Oferecer um produto de baixa qualidade, além de afastar de você seus clientes, impede que novos clientes cheguem até você porque a internet é um mural onde as informações ficam expostas e, sinceramente, se for negativa ganha uma repercussão ainda maior.
                <br/><br/>
                Quando for pensar na qualidade do serviço/produto que você vai comercializar, faça uma pergunta simples: eu pagaria para adquirir este produto ou utilizar este serviço que quero comercializar? Se a resposta for não, melhor mudar urgentemente.
                <br/><br/>
                <strong>#4 - Pós-venda</strong>
                <br/><br/>
                Vender não é tão difícil quanto parece, mas, mais que vender é necessário vender sempre, não é mesmo? O cliente é nosso amigo, não nosso rival. Um serviço de pós-venda bem-feito não é apenas para ouvir ou resolver problemas, muito pelo contrário, o pós-venda é uma ferramenta incrível para que seu negócio se desenvolva.
                <br/><br/>
                O pós-venda é onde você identifica a real experiência do seu cliente com o produto ou serviço ofertado e isto deve ser encarado como processo contínuo de melhoria e melhor atendimento, fidelizando seu cliente e ganhando um grande aliado para que você venda ainda mais, afinal, o boca a boca, seja pessoalmente ou na internet faz grande diferença. Então, ofereça a seus clientes linhas de contato direto (WhatsApp, Telefone, e-mail...) e que esse acesso seja facilitado.
                <br/><br/>
                O segredo do pós-venda é mostrar ao seu cliente o quanto ele é importante pra você e para o seu negócio.
                <br/><br/>
                <strong>#5 – MVP</strong>
                <br/><br/>
                Eis aqui uma ferramenta preciosa. Ao invés de você começar o negócio com tanto investimento, escolha uma forma mais simples de começar seu negócio. Por forma mais simples entenda: gaste menos, teste o produto e ouça feedback dos seus clientes.
                <br/><br/>
                Por exemplo: você resolve vender xícaras personalizadas, ao invés de investir em contratar uma plataforma de e-commerce ou desenvolver algum sistema complexo, que tal testar as vendas via Whatsapp com formas de pagamento que não te exigem muito, como pix, PicPay e dinheiro?
                <br/><br/>
                Viu só? O MVP pode te ajudar a construir um negócio sólido. Lembre-se mais importante que a velocidade é a consistência.
                <br/><br/>
                Gostou das dicas? Tem alguma dúvida? Só comentar aí e vamos juntos!
                <br/><br/>
                Aproveite e visite nosso BLOG que está recheado de dicas incríveis de empreendedorismo, tecnologia e novos negócios.
                <br/><br/>
                Dica do editor: Não há muto segredo para você começar seu novo negócio, se você seguir estas dicas, há grande possibilidade de dar certo, mas, lembre-se, escolha algo que você tenha paixão, porque todo negócio precisa de dedicação e foco do empreender, combinado?
                                
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