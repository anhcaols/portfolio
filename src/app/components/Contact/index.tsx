import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div id="contact" className="container px-4 pt-10">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-12">
        <div className="col-span-6 lg:col-span-5">
          <h3 className="text-2xl font-600">CONTACT ME</h3>
          <p className="pb-[30px] pt-2 text-gray">Tell me quickly about your connection</p>
          <div className="flex flex-col gap-2">
            <Card className="cursor-pointer !p-3">
              <div className="flex gap-2 ">
                <img className=" h-7 w-7" src="/assets/images/google-voice.svg" alt="phone" />
                Phone:
                <p>+84 395562788</p>
              </div>
            </Card>
            <Card className="cursor-pointer !p-3">
              <a href="mailto: caotheanhls2001@gmail.com">
                <div className="flex gap-2 ">
                  <img className=" h-7 w-7" src="/assets/images/gmail.svg" alt="gmail" />
                  Email:
                  <p className="inline-block border-b border-solid border-primary">caotheanhls2001@gmail.com</p>
                </div>
              </a>
            </Card>
            <Card className="cursor-pointer !p-3">
              <a href="https://www.linkedin.com/in/anhcaols10/" target="_blank">
                <div className="flex gap-2 ">
                  <img className="h-7 w-7" src="/assets/images/linkedin-alt.svg" alt="linkedin" />
                  Linkedin:
                  <p className="inline-block border-b border-solid border-primary">Anh Cao</p>
                </div>
              </a>
            </Card>
            <Card className="cursor-pointer !p-3">
              <a href="https://facebook.com/anhcaolsdev" target="_blank">
                <div className="flex gap-2 ">
                  <img className=" h-[26px] w-[26px]" src="/assets/images/facebook.svg" alt="facebook" />
                  Facebook:
                  <p className="inline-block border-b border-solid border-primary">Cao Thế Anh</p>
                </div>
              </a>
            </Card>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-7">
          <div className="cursor-pointer border border-solid border-accent bg-hover p-5 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-custom">
            <div className="flex flex-col gap-4">
              <Input placeholder="Full name" />
              <Input placeholder="Email address" type="email" />
              <Input placeholder="Phone number" type="number" />
              <Textarea placeholder="Enter your message" />
              <Button className="cursor-no-drop">
                <SendHorizonal className="mr-2 inline-block" size={20} strokeWidth={2} />
                Send message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
