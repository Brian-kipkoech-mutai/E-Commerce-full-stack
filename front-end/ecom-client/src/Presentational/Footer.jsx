import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import ComapanyLogoPlain from "./CompaylogoPlain";
import YoutubeIcon from "./YoutubeIcon";
import { Link } from "react-router-dom";
import { Amex, MasterCard, Visa } from "./PaymetsLogo";

const Footer = () => {
  return (
    <footer className=" py-6  ">
      <div className="flex justify-between flex-wrap max-w-screen-lg mx-auto">
        {" "}
        <section className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <ComapanyLogoPlain />{" "}
            <span className="font-bold text-lg">TrendHive</span>
          </div>
          <div>
            <p className="text-sm text-muted-foreground  ">
              TrendHive: Where Trends Thrive
            </p>
          </div>
          <div className="flex gap-4 text-lg text-muted-foreground items-center [&>*]:cursor-pointer  [&>*]:hover:text-gray-800 ">
            <GitHubLogoIcon />
            <InstagramLogoIcon />
            <YoutubeIcon />
          </div>
        </section>
        <section>
          <div className=" flex space-x-8 text-muted-foreground">
            <section className="flex flex-col gap-4 ">
              <h2 className="font-semibold ">Support</h2>
              <div className=" flex flex-col gap-3  text-sm">
                <Link className="hover:text-blue-500  hover:underline">
                  FAQ
                </Link>
                <Link className="hover:text-blue-500  hover:underline">
                  Terms of use
                </Link>
                <Link className="hover:text-blue-500  hover:underline">
                  Privacy Plolicy
                </Link>
              </div>
            </section>
            <section className="flex flex-col gap-4  ">
              <h2 className="font-semibold">Company</h2>
              <div className=" flex flex-col gap-3 text-sm">
                <Link className="hover:text-blue-500  hover:underline">
                  About Us
                </Link>
                <Link className="hover:text-blue-500  hover:underline">
                  Contact
                </Link>
                <Link className="hover:text-blue-500  hover:underline">
                  Careers
                </Link>
              </div>
            </section>
            <section className="flex flex-col gap-4 ">
              <h2 className="font-semibold">Shop</h2>
              <div className=" flex flex-col gap-3 text-sm">
                <Link className="hover:text-blue-500  hover:underline">
                  My Account
                </Link>
                <Link className="hover:text-blue-500  hover:underline">
                  Checkout
                </Link>
                <Link className="hover:text-blue-500  hover:underline">
                  Cart
                </Link>
              </div>
            </section>
          </div>
        </section>
        <section className=" flex flex-col">
          <h2 className="font-semibold text-sm text-muted-foreground">
            ACCEPTED PAYMENTS
          </h2>
          <div className="flex  gap-3 flex-1  items-center ">
            <MasterCard />
            <Amex />
            <Visa />
          </div>
        </section>
      </div>

      <div className=" max-w-screen-lg mx-auto mt-16">
        <hr className="bg-muted-foreground" />
        <div>
          <p className="text-center text-muted-foreground text-sm">
            © 2024 Trendhive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
