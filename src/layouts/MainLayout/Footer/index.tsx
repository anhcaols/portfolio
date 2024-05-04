import Image from "next/image";
import { Button } from "@/components/ui/button/button";

export default function Footer() {
  return (
    <div className="container mt-6 flex flex-col items-center justify-between gap-4 px-4 py-12 lg:mt-24 lg:flex-row">
      <p className="text-gray">© 2024 ANHLS. ALL RIGHTS RESERVED.</p>
      <div className="flex justify-between gap-2 sm:justify-start">
        <a href="https://facebook.com/anhcaolsdev/" target="_blank">
          <Button variant="icon">
            <Image width={20} height={20} src="/assets/images/facebook.svg" alt="facebook" />
          </Button>
        </a>
        <a href="https://www.instagram.com/_anhcaols/" target="_blank">
          <Button variant="icon">
            <Image width={24} height={24} src="/assets/images/instagram.svg" alt="instagram" />
          </Button>
        </a>
        <a href="https://twitter.com/anhcaols/" target="_blank">
          <Button variant="icon">
            <Image width={24} height={24} src="/assets/images/twitter.svg" alt="twitter" />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/anhcaols10/" target="_blank">
          <Button variant="icon">
            <Image width={24} height={24} src="/assets/images/linkedin-alt.svg" alt="linkedin" />
          </Button>
        </a>
        <a href="https://github.com/anhcaols/" target="_blank">
          <Button variant="icon">
            <Image width={20} height={20} src="/assets/images/github.svg" alt="github" />
          </Button>
        </a>
      </div>
    </div>
  );
}