import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ChevronRight, ShoppingBasket, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-10">
      <div className="flex justify-between    items-center">
        <section className="flex items-center gap-3 font-semibold text-xl">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="40" height="40" rx="20" fill="#0E1422" />
            <path
              d="M24.4768 11.8485L18.2039 8.05509C17.6118 7.69292 16.9387 7.5015 16.2531 7.50031C14.2093 7.50031 12.3346 9.21225 12.3346 11.605V25.8073L24.4768 18.4669C26.9081 16.9947 26.9081 13.32 24.4768 11.8485ZM15.8483 18.948V11.3679L22.1162 15.1567L15.8483 18.948Z"
              fill="white"
            />
            <path
              d="M27.8488 33.4844C27.8488 33.5273 15.9907 33.466 15.9907 33.466L14.9432 33.3425C13.2466 33.144 11.9441 31.6233 12.0018 29.8346C12.0018 29.7917 12.0055 29.7519 12.008 29.7103C12.0546 28.9365 12.326 28.1961 12.7857 27.5885C12.9724 27.3461 13.2008 27.1425 13.459 26.9882L22.478 21.5725C24.3413 20.4535 25.893 20.062 26.6998 18.0341C26.9973 17.2757 27.1258 16.4562 27.0756 15.6379L27.0444 15.0865L27.965 20.4204C28.0829 21.3264 27.9012 22.2537 27.421 23.0169C27.1325 23.4785 26.7474 23.8653 26.295 24.1479L15.8294 29.3943C15.819 29.4006 15.8088 29.4074 15.7991 29.4149C15.5126 29.6293 15.6894 30.1069 16.0402 30.0867L24.7514 30.1403C26.4431 30.0417 27.8524 31.7112 27.8488 33.4844Z"
              fill="white"
            />
          </svg>
          <span>TrendHive</span>
        </section>
        <section className="flex  gap-6 text-gray-600  font-semibold">
          <NavLink>Home</NavLink>
          <div>Categories</div>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </section>
        <section className="flex gap-3 items-center  text-gray-600">
          <div
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50
            
              items-center"
          >
            <MagnifyingGlassIcon className="h-6 w-6 "></MagnifyingGlassIcon>
            <input
              type="text"
              className=" outline-none placeholder:pl-2"
              placeholder="Search products"
            />
          </div>
          <div className=" rounded-full p-1 border">
            <User></User>{" "}
          </div>
          <div>
            {" "}
            <ShoppingBasket></ShoppingBasket>{" "}
          </div>
        </section>
      </div>
      <div>
        <h1 className=" text-xl font-semibold">Page Title</h1>
        <p className="text-gray-600 text-sm mt-2">
          TrendHive <ChevronRight className="inline"></ChevronRight>
          <span className="text-gray-800">page Name</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
