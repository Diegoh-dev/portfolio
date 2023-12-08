'use client'
import { FooterComponent } from "@/components/molecule/components/Footer/footer";
import { Post } from "@/components/molecule/components/Post/post";
import { BarChart2, Heart, MessageCircle, Share2 } from "lucide-react";
import { toast } from "react-toastify";
import postImage from '../../../public/assets/capa.png';
import capaVolvo from '../../../public/assets/ProductList-Desktop.png'
import capaCapsulaDoTempo from '../../../public/assets/Memories.png'
import javascript from '../../../public/assets/javascript.png'
import next from '../../../public/assets/next.png'
import jest from '../../../public/assets/jest.png'
import react from '../../../public/assets/react.png'
import typescript from '../../../public/assets/typescript.png'
import sass from '../../../public/assets/sass.png'
import tailwind from '../../../public/assets/tailwind.png'
import radix from '../../../public/assets/radix.png'
import instagram from '../../../public/assets/instagram.png'


export default function Habilidades(){
    return (
        //mt-9 fazer o calc
        <div className=" w-full overflow-auto flex-col tablet:flex tablet:w-2/3 laptop:w-3/4 sm:h-[calc(100dvh-57px)] h-screen ">
          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content texto="JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos."/>
              <Post.PostImage src={javascript} href={"https://github.com/Diegoh-dev/volvo-teste" || ''}/>
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle} onClick={()=> {
                  toast.warn('Em breve, você poderá comentar nesse post')
                }}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart} onClick={()=> {
                  toast.warn('Em breve, você poderá curtir esse post')
                }}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2} onClick={()=> {
                  toast.warn('Em breve, total de visualizações')
                }}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>

          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content texto="Next.js é um framework para React que oferece uma estrutura básica para projetos React. O Next JS possui renderização estática e pelo lado do servidor. Possui suporte ao Typescript e serviço de tratamento de rotas."/>
              <Post.PostImage src={next} href={"" || ''}/>
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle} onClick={()=> {
                  toast.warn('Em breve, você poderá comentar nesse post')
                }}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart} onClick={()=> {
                  toast.warn('Em breve, você poderá curtir esse post')
                }}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2} onClick={()=> {
                  toast.warn('Em breve, total de visualizações')
                }}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>

          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content texto="Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade. Funciona com projetos usando: Babel, TypeScript, Node, React, Angular, Vue e muito mais!"/>
              <Post.PostImage src={jest} href={"" || ''}/>
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle} onClick={()=> {
                  toast.warn('Em breve, você poderá comentar nesse post')
                }}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart} onClick={()=> {
                  toast.warn('Em breve, você poderá curtir esse post')
                }}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2} onClick={()=> {
                  toast.warn('Em breve, total de visualizações')
                }}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>

          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content texto="React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb."/>
              <Post.PostImage src={react} href={"" || ''}/>
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle} onClick={()=> {
                  toast.warn('Em breve, você poderá comentar nesse post')
                }}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart} onClick={()=> {
                  toast.warn('Em breve, você poderá curtir esse post')
                }}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2} onClick={()=> {
                  toast.warn('Em breve, total de visualizações')
                }}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>

          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content texto="TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento."/>
              <Post.PostImage src={typescript} href={"" || ''}/>
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle} onClick={()=> {
                  toast.warn('Em breve, você poderá comentar nesse post')
                }}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart} onClick={()=> {
                  toast.warn('Em breve, você poderá curtir esse post')
                }}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2} onClick={()=> {
                  toast.warn('Em breve, total de visualizações')
                }}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>

          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content texto="SASS é um pré processador que no final gera seu CSS nativo. A vantagem disso é que o SASS vai te dar várias funções e recursos que o CSS nativo não tem (ainda)."/>
              <Post.PostImage src={sass} href={"" || ''}/>
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle} onClick={()=> {
                  toast.warn('Em breve, você poderá comentar nesse post')
                }}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart} onClick={()=> {
                  toast.warn('Em breve, você poderá curtir esse post')
                }}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2} onClick={()=> {
                  toast.warn('Em breve, total de visualizações')
                }}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>

          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content texto="Tailwind é um framework CSS que permite há você criar layouts para suas aplicações web utilizando sua estrutura. Ou seja, uma ferramenta que fornece componentes para sua estilização. O propósito geral da criação desse framework é aumentar a velocidade para o desenvolvimento, agilizando os processos de criação de seus web sites e sistemas web."/>
              <Post.PostImage src={tailwind} href={"" || ''}/>
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle} onClick={()=> {
                  toast.warn('Em breve, você poderá comentar nesse post')
                }}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart} onClick={()=> {
                  toast.warn('Em breve, você poderá curtir esse post')
                }}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2} onClick={()=> {
                  toast.warn('Em breve, total de visualizações')
                }}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>

          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content texto="Radix UI é uma biblioteca de componentes de UI de código aberto para a construção de aplicativos da web e sistemas de design acessíveis e de alta qualidade. Ele é composto por um conjunto de componentes sem estilo e de baixo nível que podem ser usados ​​para criar qualquer tipo de interface de usuário."/>
              <Post.PostImage src={radix} href={"" || ''}/>
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle} onClick={()=> {
                  toast.warn('Em breve, você poderá comentar nesse post')
                }}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart} onClick={()=> {
                  toast.warn('Em breve, você poderá curtir esse post')
                }}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2} onClick={()=> {
                  toast.warn('Em breve, total de visualizações')
                }}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>

      

      

          <FooterComponent/>
        </div>
    )
}