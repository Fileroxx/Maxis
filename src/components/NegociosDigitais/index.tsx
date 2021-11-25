import { Container } from "react-bootstrap";
import styles from './styles.module.css'

export default function NegociosDigitais() {
    return(
        <div id={styles.detalhes}>

            <div id={styles.hero}>

            <img width="100%" src="heroDetalhes.png" alt=""/>

            </div>

       

             <div className={styles.detalhes}>
                 
             <Container>

                <h3>Negócios Digitais</h3>

                <p>

                A internet trouxe inúmeras novas possibilidades para fazer as coisas, desde um encontro para relacionamento, até grupos de estudo acadêmicos, é possível, pela internet.
                Agora, sem dúvida alguma, um grande benefício que a internet trouxe para os empreendedores foi aumentar sua área de atuação, na verdade, os limitadores para fazer negócios são mais resultados de uma decisão do empreendedor do que propriamente dito da internet.
                Dito isto, podemos navegar nesse oceano gigante para realizar novos negócios, ampliar resultados e, para isso, precisamos entender um pouco de Negócios Digitais, então, vamos nessa?
                                
                </p>

                <h4>O que são negócios digitais?</h4>

                <p>
                A primeira informação interessante para quem quer
                empreender é que hoje você não precisa mais ter 
                uma loja “de rua” para começar a empreender.
                O Negócio Digital revolucionou o jeito que nós
                realizamos compra e venda. Você sabe, por exemplo, 
                onde fica a Amazon? Aí você pode responder, sei sim,
                vi aqui no Google o endereço, sim, tudo bem, mas você conhece 
                uma loja de rua da Amazon na sua cidade? 
                
                
                Você se desloca até lá para comprar alguma coisa,
                ou a loja que você visita está na palma de sua mão
                ou a um clique?

                Para não alongar muito, podemos dizer que <strong>Negócios Digitais
                são todos os negócios que acontecem no mundo digital</strong>.
                Então, empreendedor, para você começar seu negócio digital,
                mais importante que se preocupar com uma loja física
                entenda que você só precisa do produto certo para 
                trazer a solução certa para a dor do seu público-alvo.
                
                Depois disso é usar a tecnologia e a internet a seu favor,
                iniciando suas vendas. E sabe o que é mais legal? 
                Este produto pode ser físico ou não!
                </p>


                <h4>Mercado de negócio digital</h4>

                <p>
                As transações on-line não param de crescer. Segundo a Neotrust Compre&Confie, em parceria com a ABComm, de 2019 para 2020 (no período apurado) houve um aumento de quase 45 bilhões de reais.
                Esta informação deixa claro que ficar fora do negócio digital não é uma boa ideia. E você se pergunta: mas eu já tenho uma loja física, então, não posso ter negócio digital e aumentar meus resultados?
                Bom, não é bem assim que funciona... por exemplo, você tem uma lanchonete que vende hamburgueres e usa o WhatsApp para fazer seu serviço de delivery já indica que você está, de certa forma, utilizando-se de negócios digitais, mas, há uma caminhada bem maior que te fará avançar ainda mais, por exemplo, e se você tivesse um aplicativo, ou cadastra-se em algum, para fazer seu delivery e mais longe? E se você utilizasse as redes sociais para garantir novos clientes, através de tráfego pago e assim alargar o alcance da sua lanchonete? Viu só, não é tão difícil assim, há inúmeras oportunidades para você não ficar de fora dessa onda que está trazendo grandes resultados aos empreendedores  
                
                </p>


                <h4>Tipos de Negócios Digitais</h4>

                <p>
                  O que chama bastante a atenção é a flexibilidade e possibilidades que os negócios digitais proporcionaram.                    
                </p>

                <p>
                Essas possibilidades dão ao empreender a condição de aumentar seu leque de vendas e, consequentemente, atingir resultados muito grande, uma vez que há diversas maneiras de fazer o mesmo negócio.

                Conheça alguns tipos de possibilidades que os negócios digitais proporcionam:
                <br /><br/>
                · Infoprodutos;
                <br />
                · E-commerce;
                <br />
                · Educação tipo EAD;
                <br />
                · Venda por aplicativo;
                <br />
                · Serviços de Consultoria.
                <br /><br/>
                E você, conhece algum desses tipos de negócios digitais? Qual destes te interessa mais conhecer? Conta pra gente nos comentários e dá uma pesquisada em nosso BLOG para conhecer mais sobre tecnologia, empreendedorismo e novos negócios.

                Nos vemos no próximo blog, combinado?
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
        </div>
    )
}