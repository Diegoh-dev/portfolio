// import { Posts } from "@/components/molecule/components"
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { Post } from "../../molecule/components/Post/post";
import { BarChart2, Heart, MessageCircle, Share2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ControllerContext } from "@/context/ControlleContext";
import capaVolvo from '../../../../public/assets/ProductList-Desktop.png';
import capaCapsulaDoTempo from '../../../../public/assets/Memories.png';
import capaPortifolio from '../../../../public/assets/portifolioNovo.png';
import capaDesenvolvimento from '../../../../public/assets/emDesenvolvimento.png';
import { FooterComponent } from "@/components/molecule/components/Footer/footer";
import { toast } from "react-toastify";


export function MenuTabs() {
  const { theme, setTheme ,resolvedTheme} = useTheme();
  function shareContent(){
    console.log('fui chamada')
    if(navigator.share){
      navigator.share({
        url:'https://www.linkedin.com/in/diego-costa-dev/',
        title:'Linkedin do Diego'
      })
    }
  }
  const [mounted,setMounted] = useState(false);

  const {color} = useContext(ControllerContext);

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }

  return (
    <Tabs position="relative" variant="soft-rounded" colorScheme="green">
      <TabList
        className={`${resolvedTheme === 'light' ? 'border-borderLight' : resolvedTheme === 'littleDark' ? 'border-border-littleDark' : 'border-border-black'} flex justify-between` }
        aria-orientation="horizontal"
        borderBottomWidth={"1px"}
      >
        <Tab className="font-petrov text-lg tracking-[0.1rem] p-1">
          Projetos
        </Tab>
        <Tab className="font-petrov text-lg tracking-[0.1rem] p-1">
          Habilidades
        </Tab>
        <Tab className="font-petrov text-lg tracking-[0.1rem] p-1">
          Contatos
        </Tab>
      </TabList>
      <TabIndicator
        mt="-5.8"
        height="4px"
        bg={`${color === "blue" ? "var(--color-blue)" : color === 'purple' ? "var(--color-purple)"  : color === 'yellow' ? "var(--color-yellow)" : color === 'orange' ? "var(--color-orange)" : color === 'green' ? "var(--color-green)" : "var(--color-pink)"} `}
        className="rounded"
      />
      <TabPanels mt={".5rem"}>
        <TabPanel>
        <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content texto="Projeto desse portfólio, a intenção era fazer um projeto diferente da maioria dos portfólio que existe hoje na web. Eu quis trazer uma ideia parecida com twitter, onde o usuário vai poder curtir, comentar , ver o total de visualização de cada projeto e poder compartilhar caso ele ache o projeto interessante. Essas funcionalidades estão em desenvolvimento exceto a de compartilhamento. As tecnologias usadas nesse projeto: Next 13, Tailwind, Radix, Typescript, Jest e muito mais.  Clique na imagem para ser redirecionado para o repositório dessa aplicação 🤗😎.
              "/>
              <Post.PostImage src={capaPortifolio} href={"https://github.com/Diegoh-dev/portfolio" || ''}/>
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
              <Post.Content texto="Desafio Volvo: No âmbito deste desafio, explorei minhas habilidades na construção de um projeto inovador totalmente desenvolvido em Next.js 13 e alimentado por Typescript. Minha abordagem para esse desafio envolveu a aplicação rigorosa do conceito de componentização do React, visando eliminar redundâncias de código e promover uma arquitetura eficiente.
                A estrutura do projeto foi planejada para oferecer páginas dinâmicas que proporcionam uma experiência envolvente, permitindo a visualização detalhada de cada carro e simplificando o processo de compra. Ao enfrentar esse desafio, busquei não apenas atender às expectativas, mas superá-las, demonstrando minha paixão pelo desenvolvimento front-end e minha capacidade de criar soluções que transcendem o comum. Este projeto não é apenas um exemplo de minhas habilidades técnicas, mas também reflete meu compromisso em proporcionar experiências cativantes aos usuários. Clique na imagem para ser redirecionado para o repositório dessa aplicação. 🤗😎"/>
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

          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content texto="Pegue seu café, estou codando...👩‍💻💻"/>
              <Post.PostImage src={capaDesenvolvimento} href={"" || ''}/>
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
              <Post.Content texto="Pegue seu café, estou codando...👩‍💻💻"/>
              <Post.PostImage src={capaDesenvolvimento} href={"" || ''}/>
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
              <Post.Content texto="Pegue seu café, estou codando...👩‍💻💻"/>
              <Post.PostImage src={capaDesenvolvimento} href={"" || ''}/>
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
        </TabPanel>
   
      </TabPanels>

    </Tabs>
  )
}
