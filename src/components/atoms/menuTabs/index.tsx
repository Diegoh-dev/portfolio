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
import { useEffect, useState } from "react"
export function MenuTabs() {
  const { theme, setTheme } = useTheme();

  const [mounted,setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }

  return (
    <Tabs position="relative" variant="soft-rounded" colorScheme="green">
      <TabList
        className="flex justify-between border-gray"
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
        bg={theme === "light" ? "var(--color-blue)" : "var(--color-purple)"}
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
                <Post.PostIcon Icon={Share2}></Post.PostIcon>
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
                <Post.PostIcon Icon={Share2}>
                  
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
                <Post.PostIcon Icon={Share2}></Post.PostIcon>
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
