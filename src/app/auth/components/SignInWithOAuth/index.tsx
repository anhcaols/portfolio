import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SignInWithOAuth() {
  return (
    <div className="flex flex-col gap-4">
      <Button className="w-full" size="default" variant="outline">
        <Image className="mr-2" width={24} height={24} src="/assets/images/google-logo.svg" alt="goggle" />
        Sign in with Google
      </Button>
      <Button className="w-full" size="default" variant="outline">
        <Image className="mr-2" width={20} height={20} src="/assets/images/facebook-logo.svg" alt="facebook" />
        Sign in with Facebook
      </Button>
      <Button className="w-full" size="default" variant="outline">
        <Image className="mr-2" width={20} height={20} src="/assets/images/github-logo.svg" alt="github" />
        Sign in with Github
      </Button>
    </div>
  );
}