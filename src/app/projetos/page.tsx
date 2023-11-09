'use client'
import { Post } from "@/components/molecule/components/Post/post";
import { BarChart2, Heart, MessageCircle, Share2 } from "lucide-react";

export default function Projetos(){
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
        </div>
    )
}