import { Input } from "@/components/ui/input";
import Divider from "./Divider";
import { Button } from "@/components/ui/button";
  

const SignUp = () => {
    return (
      <form className="max-w-xs mx-auto flex flex-col gap-4 py-8">
        <section>
          <Button className="w-full">Continue with Google</Button>
        </section>
        <Divider></Divider>
        <section className=" flex flex-col gap-2">
          <fieldset>
            <label htmlFor="name" className="font-semibold  text-gray-700">
              Name
            </label>
            <Input id="name" type="text" className="mt-1"></Input>
          </fieldset>
          <fieldset>
            <label htmlFor="email" className="font-semibold  text-gray-700">
              Email
            </label>
            <Input id="email" type="email" className="mt-1"></Input>
          </fieldset>
          <fieldset>
            <label htmlFor="password" className="font-semibold text-gray-700">
              Password
            </label>
            <Input id="password" type="password" className="mt-1"></Input>
          </fieldset>
          <p className="text-center text-muted-foreground text-sm">
            By creating an account you agree with our Terms of Service, Privacy
            Policy,
          </p>
        </section>
        <section>
          <Button className="w-full">Create account</Button>
        </section>
        <section>
          <p className="text-center text-muted-foreground text-sm mt-6">
            Already have an account? Log in
          </p>
        </section>
      </form>
    );
}
  
export  default SignUp;