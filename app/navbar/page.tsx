import Image from "next/image";
import TradingSight from "@/assets/TradingSight.png"; // works with webpack
import { NavbarItems } from "@/constants";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between px-6 sticky bg-fourth ">
      <div>
        <Image src={TradingSight} alt="" width={140} height={200}  />
      </div>
      <div className="flex gap-8">
        {NavbarItems.map((item) => (
          <a key={item.id} href={item.link}  className="text-third font-semibold text-lg">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
