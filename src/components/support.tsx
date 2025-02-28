import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { HoverEffect2 } from "./ui/hover-effect2";

import { GiFlowerStar } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";
import { PlusIcon } from "lucide-react";

import people1 from "@/assets/img/people/1.png";
import people2 from "@/assets/img/people/2.png";
import people3 from "@/assets/img/people/3.png";
import icon15 from "@/assets/img/icon/15.png";
import icon16 from "@/assets/img/icon/16.png";
import icon17 from "@/assets/img/icon/17.png";

const support = [
  {
    icon: icon16,
    title: "Our team shares values of success",
    description: "At Sublime, our team is focussed on working with you to achieve success.",
  },
  {
    icon: icon15,
    title: "We’re on a mission to power our customers",
    description: "Whatever your business needs, we're here for you and want to help.",
  },
  {
    icon: icon17,
    title: "We’re here to protect your data online",
    description: "You can trust in our world class data protection methods and processes. ",
  },
];

const Support = () => {
  return (
    <BackgroundGradientAnimation containerClassName='py-24'>
      <div className='container mx-auto py-24'>
        <div className='flex gap-4 justify-evenly'>
          <div className='flex justify-center'>
            <img src={people3} alt={"people1"} className='w-20 rounded-full border-white border-4 shadow-sm shadow-white -ml-4' />
            <img src={people1} alt={"people1"} className='w-20 rounded-full border-white border-4 shadow-sm shadow-white -ml-4' />
            <img src={people2} alt={"people1"} className='w-20 rounded-full border-white border-4 shadow-sm shadow-white -ml-4' />
          </div>
          <h2 className='text-4xl max-w-sm'>Powerful Customer Support</h2>
          <div className='flex text-2xl gap-4 items-end'>
            <PlusIcon />
            <TbNorthStar />
            <GiFlowerStar />
          </div>
        </div>
        <div>
          <HoverEffect2 items={support} />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Support;
