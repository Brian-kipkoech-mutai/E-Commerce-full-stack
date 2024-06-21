import { Card, CardContent, CardFooter } from "@/components/ui/card";
 import placeHolderImg from "../assets/images/pexels-mart-production-9558581.jpg";

const BestSelling = () => {
  return (
    <div className="mt-20 mb-40 max-w-screen-xl mx-auto flex  flex-wrap justify-between  gap-2  px-20">
      {[...Array(4)].map((_, i) => (
        <Card className="h-96 w-64  cursor-pointer " key={i}>
          <CardContent className=" p-0 shadow-md">
            <img
              src={placeHolderImg}
              alt="placeHolder"
              className="w-full  h-72 rounded-sm  rounded-b-none  object-cover  "
            />
          </CardContent>
          <CardFooter className="flex-col gap-3 w-full items-start p-2 mt-5   rounded-md">
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
        </Card>
      ))}
    </div>
  );
};

export default BestSelling;
