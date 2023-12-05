'use client'
import { Post } from "@/components/molecule/components/Post/post";
import { BarChart2, Heart, MessageCircle, Share2 } from "lucide-react";
import { toast } from "react-toastify";
import postImage from '../../../public/assets/capa.png';
import capaVolvo from '../../../public/assets/ProductList-Desktop.png';
import capaCapsulaDoTempo from '../../../public/assets/Memories.png';

export default function Projetos(){
  //transformar em hook
  function shareContent(){
    if(navigator.share){
      navigator.share({
        url:'https://www.linkedin.com/in/diego-costa-dev/',
        title:'Linkedin do Diego'
      })
    }
  }
    return (
        //mt-9 fazer o calc
        <div className=" overflow-auto w-full flex-col tablet:flex tablet:w-2/3 laptop:w-3/4 sm:h-[calc(100dvh-57px)] h-screen">
           <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content />
              <Post.PostImage src={postImage} href={"https://github.com/Diegoh-dev/volvo-teste" || ''}/>
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
              <Post.Content texto="Projeto realizado na NLW da Rocketseat, onde foi usado algumas das tecnologias tendências do mercado. A ideia do projeto é construir uma aplicação onde o usuário pudesse compartilhar momentos importante da sua vida, além disso, poder compartilhar com o mundo esse momento. Esse projeto foi feito utilizando as seguintes tecnologias: Next, Tailwind, React native com expo, Nodejs, Fastify, Typescript, entre outras. Clique na imagem para ser redirecionado para o repositório dessa aplicação 🤗😎.
              "/>
              <Post.PostImage src={capaCapsulaDoTempo} href={"https://github.com/Diegoh-dev/spacetime" || ''}/>
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
              <Post.Content />
              <Post.PostImage src={capaVolvo} href={"https://github.com/Diegoh-dev/volvo-teste" || ''}/>
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
        </div>
    )
}