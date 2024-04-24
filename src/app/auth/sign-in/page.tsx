"use client";

import { Box } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SignInWithOAuth from "@/app/auth/components/SignInWithOAuth";

export default function SignUpPage() {
  const form = useForm();
  return (
    <div className="flex h-full w-full items-center justify-center bg-dark">
      <div className="w-[400px] rounded-lg bg-darkGray p-8">
        <div className="flex w-full flex-col items-center">
          <div className="flex items-center gap-2">
            <Box className="text-primary" size={32} />
            <h2 className="text-2xl font-600">Next Auth</h2>
          </div>
          <div className="w-full pt-8">
            <Form {...form}>
              <FormField
                name="..."
                render={() => (
                  <div className="flex flex-col gap-4">
                    <FormItem>
                      <Input placeholder="Please enter email..." />
                      <FormMessage />
                    </FormItem>
                    <FormItem>
                      <Input type="password" placeholder="Please enter password..." />
                      <FormMessage />
                    </FormItem>
                    <div className="flex justify-end">
                      <Button variant="link" className="m-0 h-max p-0 font-400">
                        Forgot password?
                      </Button>
                    </div>
                    <FormItem>
                      <Button className="w-full" size="default">
                        LOGIN
                      </Button>
                    </FormItem>
                  </div>
                )}
              />
            </Form>
            <p className="flex items-center justify-center py-4 text-sm text-muted before:mr-2 before:h-[1px] before:flex-1 before:bg-muted after:ml-2 after:h-[1px]  after:flex-1 after:bg-muted">
              OR CONTINUE WITH
            </p>
            <SignInWithOAuth />
            <p className="mt-6 text-center text-base text-muted">
              You don&apos;t have an account yet?{" "}
              <Button variant="link" className="p-0 font-400">
                Sign up
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
