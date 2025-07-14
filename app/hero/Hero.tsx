import Image from "next/image";
import phone from "@/assets/phone.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex justify-between px-10 py-20">
      <div className="text-third flex flex-col gap-6 mt-36 ml-6">
        <h1 className="text-xl font-extrabold">Track Stocks Anywhere with Real-Time Insights</h1>
        <p className="w-[450px] text-lg font-bold ml-1.5">
          Stay ahead of the market with our intuitive mobile stock dashboard.
          Monitor real-time charts, analyze trends, and follow top-performing
          stocks like Apple, Tesla, and Microsoft — all from the palm of your
          hand
        </p>
        <div className="flex gap-4">
            <Button  variant="secondary" className="hover:bg-none">Explore</Button>
            <Button variant='ghost'>Analyze</Button>
        </div>
      </div>
      <Image alt="stock market" src={phone} width={350} height={150} />
    </div>
  );
};

export default Hero;
