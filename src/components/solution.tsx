import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { HoverEffect } from "./ui/hover-effect";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

import { CheckIcon } from "lucide-react";
import { GiFlowerStar } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";
import { BiRightArrowAlt } from "react-icons/bi";

import icon2 from "@/assets/img/icon/2.png";
import icon3 from "@/assets/img/icon/3.png";
import icon4 from "@/assets/img/icon/4.png";
import icon5 from "@/assets/img/icon/5.png";
import icon6 from "@/assets/img/icon/6.png";
import icon7 from "@/assets/img/icon/7.png";
import icon8 from "@/assets/img/icon/8.png";
import icon9 from "@/assets/img/icon/9.png";
import screen2 from "@/assets/img/screen/2.png";
import screen4 from "@/assets/img/screen/4.png";
import people1 from "@/assets/img/people/1.png";

const service = [
  {
    icon: icon7,
    title: "24/7 Chat Service",
    description: "Sublime is easy to use and totally customizable to your business needs.",
    link: "#",
  },
  {
    icon: icon5,
    title: "Great Communication",
    description: "Sublime is easy to use and totally customizable to your business needs.",
    link: "#",
  },
  {
    icon: icon6,
    title: "Customizable Settings",
    description: "Sublime is easy to use and totally customizable to your business needs.",
    link: "#",
  },
  {
    icon: icon4,
    title: "Increased Efficiency",
    description: "Sublime is easy to use and totally customizable to your business needs.",
    link: "#",
  },
  {
    icon: icon3,
    title: "Cloud Technology",
    description: "Sublime is easy to use and totally customizable to your business needs.",
    link: "#",
  },
  {
    icon: icon2,
    title: "On Demand Notifications",
    description: "Sublime is easy to use and totally customizable to your business needs.",
    link: "#",
  },
];

const Solution = () => {
  return (
    <>
      <div className='container mx-auto my-24'>
        <div>
          <p>SUBLIME PRODUCTS</p>
        </div>
        <div className='my-4'>
          <div className='flex gap-20'>
            <p className='text-5xl'>Provide powerful solutions at all times.</p>
            <div className='flex flex-col justify-evenly'>
              <div className='flex text-2xl gap-4'>
                <TbNorthStar />
                <GiFlowerStar />
              </div>
              <p>
                Supercharge your productivity and optimize your workflow with Sublime. Our intuitive interface and robust features for you
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackgroundGradientAnimation>
        <div className='container mx-auto py-24'>
          <HoverEffect items={service} />
        </div>
      </BackgroundGradientAnimation>
      <BackgroundGradientAnimation>
        <div className='container mx-auto grid grid-cols-2 items-center py-24'>
          <div className='flex flex-col gap-4'>
            <img src={icon8} alt='icon8' className='w-16' />
            <p className='text-4xl max-w-sm'>Provide powerful solutions at all times.</p>
            <p className='max-w-md'>
              Use Sublime to streamline your processes, save time and effort and increase your sales exponentially.{" "}
            </p>
            <div className='flex gap-8'>
              <div className='flex gap-2'>
                <CheckIcon className='w-4' />
                <p>On Demand Support</p>
              </div>
              <div className='flex gap-2'>
                <CheckIcon className='w-4' />
                <p>Seamless Cloud Technology</p>
              </div>
            </div>
            <div>
              <Button className='rounded-full w-auto pb-5 pt-4' variant={"outline"}>
                Learn More
                <BiRightArrowAlt className='mt-1' />
              </Button>
            </div>
          </div>
          <div>
            <img src={screen2} alt='screen2' className='hover:scale-110 transition-transform' />
          </div>
        </div>
      </BackgroundGradientAnimation>
      <BackgroundGradientAnimation>
        <div className='container mx-auto grid grid-cols-2 items-center gap-8 py-24'>
          <div>
            <img src={screen4} alt='screen4' className='hover:scale-110 transition-transform' />
          </div>
          <div className='flex flex-col gap-4'>
            <img src={icon9} alt='icon8' className='w-16' />
            <p className='text-4xl max-w-sm'>Provide powerful solutions at all times.</p>
            <Card className='p-8 border-s-slate-50 shadow-none relative max-w-md'>
              <div>
                <p className='italic'>
                  "Sublime took our business to the next level. It provided the solution we were hunting for at an affordable price and was
                  easy to integrate."
                </p>
              </div>
              <div className='flex gap-4 mt-4'>
                <img src={people1} alt='people1' />
                <div>
                  <p className='font-bold'>Sarah Smith</p>
                  <p>Marketing Leader @Mailchimp</p>
                </div>
              </div>
              <div className='bg-slate-100 absolute bottom-1 right-0 translate-y-1/2 w-20 h-20 rounded-full -z-[1]' />
              <Button
                className='absolute w-10 bottom-0 right-0 -translate-x-10 transition-all hover:w-14 translate-y-full rounded-t-none'
                variant={"outline"}
              >
                <BiRightArrowAlt />
              </Button>
            </Card>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
};

export default Solution;
