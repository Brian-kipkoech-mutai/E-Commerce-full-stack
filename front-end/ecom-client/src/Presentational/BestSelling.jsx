import { Card, CardContent, CardFooter } from "@/components/ui/card";
import placeHolderImg from "../assets/images/pexels-mart-production-9558581.jpg";
import { HeartIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const BestSelling = () => {
  return (
    <div className="mt-20 mb-40 max-w-screen-xl mx-auto flex  flex-wrap justify-between  gap-2  px-20 ">
      {[...Array(4)].map((_, i) => (
        <Card className="max-h-96 max-w-64    cursor-pointer relative  group" key={i} >
          <CardContent className=" p-0 shadow-md h-[75%]">
            <img
              src={placeHolderImg}
              alt="placeHolder"
              className="w-full  h-full rounded-sm  rounded-b-none  object-cover  "
            />
          </CardContent>
          <CardFooter className="flex-col gap-3 w-full items-start p-2 mt-4   rounded-md">
            <h2 className="font-semibold">Classic Monochrome Tees</h2>
            <div className="flex gap-4 w-full">
              <span className="py-1 px-3 rounded-full border  uppercase text-xs font-semibold text-muted-foreground">
                in stock
              </span>{" "}
              <span className="text-muted-foreground font-semibold">
                $35.00
              </span>
            </div>
          </CardFooter>
          <div className=" absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 top-0 w-full h-[75%]  flex  flex-col justify-between  bg-gray-50 bg-opacity-60 ">
            <section className="self-end m-3 text-muted-foreground">
              {" "}
              <HeartIcon className=" h-5 w-5" />
            </section>
            <section>
              <Button className="w-full py-6 rounded-t-none rounded-b-sm">
                Add to Cart  <span className="ml-3"><ShoppingCart/></span>
              </Button>
            </section>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BestSelling;
