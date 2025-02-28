import { PlusIcon } from "lucide-react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { GiFlowerStar } from "react-icons/gi";
import icon10 from "@/assets/img/icon/10.png";
import icon11 from "@/assets/img/icon/11.png";
import icon12 from "@/assets/img/icon/12.png";
import icon13 from "@/assets/img/icon/13.png";
import screen3 from "@/assets/img/screen/3.png";

const Power = () => {
  return (
    <div>
      <div className='container mx-auto pb-24 text-center flex gap-8 flex-col items-center'>
        <div className='flex text-2xl gap-4'>
          <PlusIcon />
          <GiFlowerStar />
        </div>
        <h2 className='max-w-md text-5xl'>Power your business with Sublime</h2>
        <p className='max-w-md'>
          Sublime seamlessly integrates with your existing infrastructure, allowing you to effortlessly connect and consolidate data from
          various sources.
        </p>
      </div>
      <BackgroundGradientAnimation>
        <div className='container mx-auto py-24 grid md:grid-cols-4 grid-cols-1 gap-x-8 items-center gap-y-16 md:gap-y-0'>
          <div className='flex flex-col gap-4'>
            <img src={icon10} alt='icon10' className='w-12' />
            <h3 className='text-3xl'>Increased Efficiency</h3>
            <p className='max max-w-sm'>Our workflows are streamlined, optimised and built to perform.</p>
          </div>
          <div className='md:row-span-2 row-span-1 md:col-span-2'>
            <img src={screen3} alt='screen3' className='w-3/4 mx-auto hover:scale-110 transition-all drop-shadow-xl' />
          </div>
          <div className='flex flex-col gap-4'>
            <img src={icon11} alt='icon10' className='w-12' />
            <h3 className='text-3xl'>Simple Systems</h3>
            <p className='max max-w-sm'>Sublime is easy to use and even easy to integrate with existing systems.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <img src={icon12} alt='icon10' className='w-12' />
            <h3 className='text-3xl'>Great Communication</h3>
            <p className='max max-w-sm'>We're here for you at any time of the day and would love to hear from you.</p>
          </div>
          <div className='flex flex-col gap-4'>
            <img src={icon13} alt='icon10' className='w-12' />
            <h3 className='text-3xl'>Easily Customized</h3>
            <p className='max max-w-sm'>Need a more custom solution? Done - let's chat about it.</p>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Power;
