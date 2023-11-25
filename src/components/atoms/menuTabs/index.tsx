// import { Posts } from "@/components/molecule/components"
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react"
import { useTheme } from "next-themes"
import { Post } from "../../molecule/components/Post/post"
import { BarChart2, Heart, MessageCircle, Share2 } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { ControllerContext } from "@/context/ControlleContext"
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
              <Post.Content />
              <Post.PostImage />
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2} onClick={()=> {
                  shareContent()
                }}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>

          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content />
              <Post.PostImage />
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2} onClick={()=> shareContent()}>
                  
                </Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>

          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content />
              <Post.PostImage />
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle}>
                  <Post.Amount amount={150} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart}>
                  <Post.Amount amount={500} />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2}>
                  <Post.Amount amount={1000} />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2} onClick={()=> shareContent()}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>
        </TabPanel>

        <TabPanel>
          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content />
              <Post.PostImage />
            </Post.PostSection>
          </Post.Root>
        </TabPanel>

        <TabPanel>
        <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content />
              <Post.PostImage />
            </Post.PostSection>
          </Post.Root>


          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content />
              <Post.PostImage />
            </Post.PostSection>
          </Post.Root>


          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content />
              <Post.PostImage />
            </Post.PostSection>
          </Post.Root>
        </TabPanel>
      </TabPanels>

      <p>o tema atual é {theme}</p>
    </Tabs>
  )
}
