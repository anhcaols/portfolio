import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col  items-center justify-center bg-dark">
      <h2 className="text-3xl font-600">Hi, I&apos;m AnhLs 👋</h2>
      <div className="mt-4 flex items-center gap-4">
        <a href="https://www.linkedin.com/in/anhcaols10/" target="_blank">
          <Button size="lg" className="w-10 px-2" variant="ghost">
            <img className=" h-4 w-4" src="/assets/images/linkedin-alt.svg" alt="linkedin" />
          </Button>
        </a>
        <a href="https://github.com/anhcaols" target="_blank">
          <Button size="lg" className="w-10 px-2" variant="ghost">
            <img className=" h-5 w-5" src="/assets/images/github.svg" alt="github" />
          </Button>
        </a>
        <a href="https://www.facebook.com/anhcaolsdev" target="_blank">
          <Button size="lg" className="w-10 px-2" variant="ghost">
            <img className=" h-5 w-5" src="/assets/images/facebook.svg" alt="facebook" />
          </Button>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <Button size="lg" className="w-10 px-2" variant="ghost">
            <img className=" h-6 w-6 " src="/assets/images/instagram.svg" alt="instagram" />
          </Button>
        </a>
      </div>
    </div>
  );
}
