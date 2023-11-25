'use client'
import { Post } from "@/components/molecule/components/Post/post";
import { BarChart2, Heart, MessageCircle, Share2 } from "lucide-react";
import { toast } from "react-toastify";

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
        <div className=" overflow-auto flex-col tablet:flex tablet:w-2/3 laptop:w-3/4 h-screen ">
          <Post.Root>
            <Post.Header />
            <Post.PostSection>
              <Post.SectionHeader />
              <Post.Content />
              <Post.PostImage />
              <Post.FooterRoot>
                <Post.PostIcon Icon={MessageCircle} onClick={()=>{
                  toast.warn('Em desenvolvimento')
                }}>
                  <Post.Amount />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart} onClick={()=>{
                  toast.warn('Em desenvolvimento')
                }}>
                  <Post.Amount />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2} onClick={()=>{
                  toast.warn('Em desenvolvimento')
                }}>
                  <Post.Amount />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2} ></Post.PostIcon>
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
                  <Post.Amount  />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart}>
                  <Post.Amount  />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2}>
                  <Post.Amount  />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2} onClick={()=> {
                  shareContent()
                }}>
                  
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
                  <Post.Amount  />
                </Post.PostIcon>
                <Post.PostIcon Icon={Heart}>
                  <Post.Amount />
                </Post.PostIcon>
                <Post.PostIcon Icon={BarChart2}>
                  <Post.Amount  />
                </Post.PostIcon>
                <Post.PostIcon Icon={Share2} onClick={()=> {
                  shareContent()
                }}></Post.PostIcon>
              </Post.FooterRoot>
            </Post.PostSection>
          </Post.Root>
        </div>
    )
}