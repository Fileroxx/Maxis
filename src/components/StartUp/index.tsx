import { Container } from "react-bootstrap";
import styles from './styles.module.css'
import Link from 'next/link'


export default function StartUp() {
    return(
        <div id={styles.detalhes}>

            <div id={styles.hero}>

            <img width="100%" src="startupFull.png" alt=""/>

            </div>

       

             <div className={styles.detalhes}>
                 
             <Container>

                <h3>Startup</h3>

                <p>

                Começamos esse blog com uma afirmação que você certamente já sabe: a Internet revolucionou a forma das pessoas viver, trabalhar, estudar... enfim, grandes mudanças aconteceram a partir do advento da popularização da grande rede mundial de comunicação.
                A Internet e a tecnologia nela embarcada, causou muita preocupação quando surgiu, principalmente em relação a questão da falta de trabalho, mas, é notório que isto não aconteceu, pelo contrário, o que antes ficava nas mãos de pessoas poderosas e cheios de conhecimento, ficou muito mais acessível.
                Com apenas uma ideia, dedicação e foco, qualquer pessoa pode começar um grande negócio! Você não acredita?
                Então, o que pode dizer acerca de empresas como a Amazon e Facebook? Começaram como Startups, simples, e até mesmo desacreditadas e hoje são, sem dúvida alguma, parte do rol das maiores empresas do mundo!
                <br/><br/>
                Então, vamos embarcar nessa viagem e conhecer um pouco mais sobre Startup?              
                </p>



                <h4>O que é?</h4>

                <p>
                Tá aí uma palavra que tem sido muito ouvida nestes últimos tempos, principalmente na era da popularização das redes sociais e dos cursos que são oferecidos por meio delas.
                Mas afinal, o que é uma startup? Você sabe responder?
                Startup é um termo, como você já deve ter percebido, originado na língua inglesa e seu siginficado é, literalmente, comece.
                Esta expressão foi abraçada no mundo de negócios, principalmente para diferenciar-se do modelo de empresas que conhecemos.
                </p>


                <h4>Características de uma Startup:</h4>

                <p>
                Em empreendedorismo Startup é relacionado a um modelo de negócios focado em crescimento acelerado e soluções inovadoras e tem características muito claras, veja:
                <br/><br/>
                1. Empresas jovens
                <br/><br/>
                Esta é uma informação importante e que diferencia as Startups de empresas, então, saiba que Startup não é pequena empresa, ok? O caminho da Startup é mais bem definido ou ela evolui e se torna uma empresa de sucesso, que resolveu uma dor e alçou voos altos, ou fecha as portas, porque, efetivamente o projeto não produziu o resultado esperado.
                <br/><br/>
                2. Escaláveis
                <br/><br/>
                Talvez essa seja o atributo que mais define uma Startup - a escalabilidade. E o que é essa tal escalabilidade? Escalabilidade é a capacidade de crescer e gerar receita de forma muito mais rápida do que sua estrutura de custos.
                O crescimento constante de suas vendas não depende em nada do aumento de suas despesas, pelo contrário, espera-se que uma Startup cresça desproporcionalmente a sua estrutura de custos. Esta é a lógica principal de uma Startup, manter os custos do projeto o mais baixo possível (não inexistente, atenção a isso), com o retorno e crescimento de forma mais rápida possível.
                <br/><br/>
                3. Tecnológica
                <br/><br/>
                Apesar não ser uma obrigatoriedade, é muito difícil dissociar uma Startup da tecnologia, porque na sua essência a Startup tem um relacionamento íntimo com a tecnologia, justamente pelo fato de ser um tipo de negócio que propõe resolver dores, do jeito mais rápido possível e, também, da maneira mais simples. Esse foco em resolver problema e facilitar a vida do usuário é o que faz da tecnologia algo essencial numa Startup.
                <br/><br/>
                4. Inovadora
                <br/><br/>
                Inovar e transformar, tá aí um bom lema para você resumir o que é uma Startup.
                <br/><br/>
                A solução criativa e o rompimento do jeito tradicional de se fazer é foco relevante numa Startup. Olhando as demandas que não eram aproveitadas no mercado buscadno diferenciais que vão do preço a entrega do serviço propriamente dita, considerando uma experiência mais profunda no cliente já tornam uma Startup uma empresa que se diferencia das demais.
                </p>




                <h4>Um bom exemplo de Startup!</h4>

                <p>
                Você é de época? Conheceu o Disco de Vinil, ou o Mp3/Ipod, quem sabe o Cd... enfim, independente disso, música é algo que faz parte do dia-a-dia das pessoas e, eis que, observando isso, em 2008 uma Startup nasceu. Seu foco era permitir que pessoas ouvissem as músicas - e atualmente os populares PodCasts, onde quisessem, como quisessem e, principalmente, as que quisessem.

                O que parecia loucura hoje é impensável, veja, uma demanda por ouvir música existia, mas apesar de já haver modos de ouvir, não era tão acessível como poderia ser, por isso Ek e Lorentzon trouxeram, a partir de uma ideia inovadora, disruptiva, tecnológica, escalável, através de uma jovem empresa o Spotify.

                Atualmente, são mais de 140 milhões de usuários com acesso a mais de 30 milhões de músicas.
                <br/><br/>
                Interessante, não é mesmo?

                Então é isso, conta pra gente o que você achou. Se tiver alguma pergunta ou dica para novos textos, não deixa de contar pra gente, tá bom?

                Aproveite e acesse os outros textos disponíveis em nosso Blog.
                <br/><br/>
                Grande abraço e até a próxima!                    
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