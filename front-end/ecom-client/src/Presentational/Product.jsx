import { Card, CardContent } from "@/components/ui/card";
import Featured from "../assets/images/pexels-leticiacurveloph-26093505-removebg-preview.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import BestSelling from "./BestSelling";

const Product = () => {
  return (
    <div>
      <section className="flex gap-20 items-center  max-w-screen-lg mx-auto  pb-20">
        <div className="w-[60%]   ">
          <Carousel className=" h-full">
            <CarouselContent className=" h-full">
              {[...Array(4)].map((_, i) => (
                <CarouselItem key={i}>
                  <Card>
                    <CardContent className=" bg-gray-100  h-full ">
                      <img
                        src={Featured}
                        alt=""
                        className="  h-[80vh] w-full object-contain"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="top-[95%] left-[75%] text-bold" />
            <CarouselNext className="top-[95%] left-[85%] text-bold" />
          </Carousel>
        </div>
        <div className="flex flex-col gap-6 w-[40%] ">
          <div className="flex justify-between items-center  mt-5 ">
            <h1 className="font-semibold     text-3xl  ">
              Raw Black T-Shirt Lineup
            </h1>
            <div>
              {" "}
              <Share2 />
            </div>
          </div>
          <div className="space-y-4">
            <section className="flex gap-2 bg-gray-100 px-3 py-1 rounded-full w-fit items-center text-sm text-muted-foreground font-semibold tracking-wide">
              <Star className="text-gray-800 h-4 w-4 " />{" "}
              <span> 4.2- 54 reviews</span> <span>in stock</span>
            </section>
            <section className="font-semibold text-xl">$75.00</section>
          </div>
          <div className="space-y-4">
            <h2 className="uppercase  text-muted-foreground text-sm font-semibold tracking-wide">
              Available Colors
            </h2>
            <div className="flex gap-4">
              <section className=" ring-1 rounded-full">
                <section
                  className="h-6 w-6 rounded-full m-1 bg-green-600
                 "
                ></section>
              </section>
              <section className=" active:ring-1 ring-gray-600  rounded-full">
                <section className="h-6 w-6 rounded-full m-1 bg-gray-400"></section>
              </section>
              <section className=" active:ring-1 ring-gray-600  rounded-full">
                <section className="h-6 w-6 rounded-full m-1 bg-blue-400"></section>
              </section>
            </div>
          </div>
          <div className="space-y-4">
            <section>
              <p className="uppercase  text-muted-foreground text-sm font-semibold tracking-wide">
                Select Size
              </p>
            </section>
            <section className="flex gap-3  rounded-sm px-3 py-2 w-fit">
              <div className="h-10 w-10 grid place-items-center border rounded-md text-xs font-semibold cursor-pointer">
                S
              </div>
              <div className="h-10 w-10 grid place-items-center border rounded-md text-xs font-semibold cursor-pointer">
                M
              </div>
              <div className="h-10 w-10 grid place-items-center border rounded-md text-xs font-semibold cursor-pointer">
                X
              </div>
              <div className="h-10 w-10 grid place-items-center border rounded-md text-xs font-semibold cursor-pointer">
                XL
              </div>
              <div className="h-10 w-10 grid place-items-center border rounded-md text-xs font-semibold cursor-pointer">
                XXL
              </div>
            </section>
          </div>
          <div className="space-y-4   text-muted-foreground text-lg">
            <p className="uppercase  text-muted-foreground text-sm font-semibold tracking-wide">
              Quantity
            </p>
            <section>
              <div className="flex border   rounded-md w-fit">
                <div className="w-12 h-10 grid place-items-center cursor-pointer  font-bold ">
                  -
                </div>
                <div className="w-12 h-10 grid place-items-center cursor-pointer">
                  2
                </div>
                <div className="w-12 h-10 grid place-items-center cursor-pointer font-bold">
                  +
                </div>
              </div>
            </section>
          </div>
          <div className="w-3/4 flex gap-4 justify-between items-center ">
            <Button className="flex-1 py-6">Add to Cart</Button>

            <span className="grid place-items-center p-3 border rounded ">
              <Heart />
            </span>
          </div>
          <p className="uppercase  text-muted-foreground font-semibold  text-sm tracking-wider">
            — Free shipping on orders $100+
          </p>
        </div>
      </section>
      <section className="max-w-screen-lg mx-auto">
        <section className="flex ">
          <section className="w-[30%] flex flex-col justify-center gap-4">
            <div className="flex gap-3 items-center bg-gray-100 px-2 py-2 rounded-md cursor-pointer">
              <DotsHorizontalIcon />
              <p className="font-semibold "> Details </p>
            </div>
            <div className="flex gap-3 items-center active:bg-gray-100 px-2 py-2 rounded-md cursor-pointer text-muted-foreground">
              <Star className="h-4 w-4" />
              <p className="font-semibold  ">Reviews</p>
            </div>
          </section>
          <section className="w-[70%] pl-10 space-y-4 pb-20">
            <h2 className="font-semibold text-2xl">Details</h2>
            <div className="space-y-10 ">
              <p className=" text-sm leading-relaxed tracking-wide text-muted-foreground">
                Elevate your everyday style with our Men's Black T-Shirts, the
                ultimate wardrobe essential for modern men. Crafted with
                meticulous attention to detail and designed for comfort, these
                versatile black tees are a must-have addition to your
                collection. The classic black color never goes out of style.
                Whether you're dressing up for a special occasion or keeping it
                casual, these black t-shirts are the perfect choice,
                effortlessly complementing any outfit.
              </p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground  space-y-3">
                <li>Tailored Fit</li>
                <li>Premium Quality</li>
                <li>Versatile Wardrobe Staple</li>
                <li>Available in Various Sizes</li>
              </ul>
            </div>
          </section>
        </section>
      </section>
      <section className="max-w-screen-xl mx-auto">
        <section>
          <section>
            <div className="space-y-4 max-w-screen-lg mx-auto">
              <h2 className="font-bold text-2xl">You might also like</h2>
              <p className="text-xs tracking-wide text-muted-foreground">
                SIMILAR PRODUCTS
              </p>
            </div>
            <section>
              <BestSelling />
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};
export default Product;
