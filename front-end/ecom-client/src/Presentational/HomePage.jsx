import { ArrowRight, Medal, ShieldCheck, Truck } from "lucide-react";
import heroImg from "../assets/images/hero.png";
import { Button } from "@/components/ui/button";
import BestSelling from "./BestSelling";
import Featured from "../assets/images/pexels-leticiacurveloph-26093505-removebg-preview.png";
import { NavLink, Outlet } from "react-router-dom";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="p-0 ">
      <section
        className="h-[70vh] my-[-5px] mt-[-7px]  w-full bg-cover bg-center flex items-center "
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="flex flex-col gap-14 max-w-screen-lg mx-auto w-full">
          <div className=" flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">Fresh Arrivals Online</h1>
            <p className="text-sm text-muted-foreground">
              Discover Our Newest Collection Today.
            </p>
          </div>
          <div>
            <Button className="py-6 px-8 flex  gap-2 group">
              View Collection{" "}
              <ArrowRight className="group-hover:translate-x-4 transition-transform duration-200 "></ArrowRight>
            </Button>
          </div>
        </div>
      </section>
      <section className=" ">
        <section className="w-full max-w-screen-lg mx-auto flex justify-between  py-28 ">
          <section className="w-3/12 text-justify">
            <div className="flex flex-col gap-4">
              <section>
                <Truck className="bg-gray-100  h-14 w-14 p-4 rounded-full "></Truck>
              </section>
              <section>
                <h2 className="text-lg font-semibold ">Free Shipping</h2>
              </section>
              <section>
                <p className="text-sm">
                  Upgrade your style today and get FREE shipping on all orders!
                  Don{"'"}t miss out.
                </p>
              </section>
            </div>
          </section>
          <section className="w-3/12 text-justify  ">
            <div className="flex flex-col gap-4">
              <section>
                <Medal className="bg-gray-100  h-14 w-14 p-4 rounded-full "></Medal>
              </section>
              <section>
                <h2 className="text-lg font-semibold ">
                  Satisfaction Guarantee
                </h2>
              </section>
              <section>
                <p className="text-sm">
                  Shop confidently with our Satisfaction Guarantee: Love it or
                  get a refund.
                </p>
              </section>
            </div>
          </section>
          <section className="w-3/12 text-justify">
            <div className="flex flex-col gap-4">
              <section>
                <ShieldCheck className="bg-gray-100  h-14 w-14 p-4 rounded-full "></ShieldCheck>
              </section>
              <section>
                <h2 className="text-lg font-semibold ">Secure Payment</h2>
              </section>
              <section>
                <p className="text-sm">
                  Your security is our priority. Your payments are secure with
                  us.
                </p>
              </section>
            </div>
          </section>
        </section>
        <section>
          <div className="space-y-4">
            <p className="text-muted-foreground uppercase text-xs text-center">
              shop Now
            </p>
            <h2 className=" text-2xl font-semibold text-center">
              Best Selling
            </h2>
          </div>

          <section>
            <BestSelling />
          </section>
          <section className="   bg-gray-100 border-t ">
            <div className="flex justify-between w-full  items-center mx-auto max-w-screen-lg">
              <div className="space-y-5 w-[40%]">
                <h2 className=" text-2xl font-bold">
                  Browse Our Fashion Paradise!
                </h2>
                <p className="text-muted-foreground">
                  Step into a world of style and explore our diverse collection
                  of clothing categories.
                </p>
                <Button className="py-6 px-8 flex  gap-2 group">
                  Start Browsing{" "}
                  <ArrowRight className="group-hover:translate-x-4 transition-transform duration-200 "></ArrowRight>
                </Button>
              </div>
              <div className="">
                <img
                  src={Featured}
                  alt=""
                  sizes=""
                  className=" h-96 w-80 object-cover rounded-md "
                />
              </div>
            </div>
          </section>
          <section>
            <section className="py-20">
              <header className="flex gap-3 justify-center font-semibold ">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "py-1 px-4 border rounded-full "
                      : "py-1 px-4 text-muted-foreground "
                  }
                  to={"featured"}
                  end
                >
                  Featured
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "py-1 px-4 border rounded-full"
                      : "py-1 px-4 text-muted-foreground "
                  }
                  to={"latest"}
                >
                  Latest
                </NavLink>
              </header>
              <div>
                 <Outlet/>
              </div>
            </section>
          </section>
           
        </section>
      </section>
    </div>
  );
};
export default HomePage;
