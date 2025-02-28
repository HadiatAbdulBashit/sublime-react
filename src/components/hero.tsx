import screen1 from "@/assets/img/screen/1.png";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <BackgroundGradientAnimation>
        <div className='w-screen h-full z-10 top-0 left-0 py-24'>
          <div className='grid grid-cols-2 items-center container mx-auto h-full'>
            <div className='flex flex-col gap-6'>
              <p className='text-gray-500 uppercase'>55,000+ trusted Businesses</p>
              <h2 className='text-7xl '>Build your next project faster.</h2>
              <p>Use Sublime to streamline your processes, save time and effort and increase your sales exponentially. </p>
              <div>
                <div className='border border-gray-300 flex rounded-full w-1/2 items-center p-0.5 bg-white'>
                  <Input className='rounded-l-full border-none' placeholder='Enter your mail address' />
                  <Button className='rounded-full px-4 py-6' size={"lg"}>
                    Get Started
                  </Button>
                </div>
              </div>
              <div className='flex gap-6'>
                <div className='flex gap-2 items-center'>
                  <FaCheckCircle />
                  <p>On Demand Support</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <FaCheckCircle />
                  <p>Seamless Cloud Technology</p>
                </div>
              </div>
            </div>
            <div className='relative h-full'>
              <img
                src={screen1}
                alt='screen'
                className='absolute left-1/2 -translate-y-1/2 top-1/2 w-[100vw] scale-[2] max-w-96 drop-shadow-xl hover:scale-[2.1] transition-all'
              />
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Hero;
