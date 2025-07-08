import Image from "next/image";
import TradingSight from "@/assets/TradingSight.png"; // works with webpack
import { NavbarItems } from "@/constants";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between px-12 sticky bg-fourth h-[70px]">
      <div>
        <Image src={TradingSight} alt="" width={100} height={200}  />
      </div>
      <div className="flex gap-8">
        {NavbarItems.map((item) => (
          <a key={item.id} href={item.link}  className="text-third  font-semibold text-sm hover:text-fifth hover:duration-500 
          hover:underline mt-2">
            {item.title}
          </a>
        ))}
        <Button size='sm'  variant='outline'>sign up</Button>
      </div>
    </div>
  );
};

export default Navbar;
