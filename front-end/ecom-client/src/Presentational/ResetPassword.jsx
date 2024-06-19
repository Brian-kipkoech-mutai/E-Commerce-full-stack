 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";

 const ResetPs = () => {
   return (
     <form className="mx-auto max-w-xs flex flex-col gap-4 py-8 ">
       <section>
         <label htmlFor="newPassword" className="font-semibold  text-gray-700">
           New Password
         </label>
         <Input id="newPassword" type="password"></Input>
       </section>
       <section>
         <label
           htmlFor="confirmPassword"
           className="font-semibold  text-gray-700"
         >
           Confirm Passoword
         </label>
         <Input id="confirmPassword" type="password"></Input>
       </section>
       <section>
         <Button className="w-full">Resset Password</Button>
       </section>
     </form>
   );
 };
 export default ResetPs;