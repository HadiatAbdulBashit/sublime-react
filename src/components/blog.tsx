import { GiFlowerStar } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { Button } from "./ui/button";
import pic1 from "@/assets/img/pic/1.png";
import { HoverEffect3 } from "./ui/hover-effect3";

const blog = [
  {
    icon: pic1,
    title: "How to Create an Effective Design Portfolio",
    description: "Experience the sublime in SaaS. Join countless satisfied customers who have chosen Sublime as their go-to SaaS platform",
  },
  {
    icon: pic1,
    title: "Building a Navigation Component with Variables",
    description: "Experience the sublime in SaaS. Join countless satisfied customers who have chosen Sublime as their go-to SaaS platform",
  },
  {
    icon: pic1,
    title: "How Can Designers Prepare for the Future?",
    description: "Experience the sublime in SaaS. Join countless satisfied customers who have chosen Sublime as their go-to SaaS platform",
  },
];

const Blog = () => {
  return (
    <div>
      <BackgroundGradientAnimation containerClassName='py-24'>
        <div className='my-4 container mx-auto'>
          <div className='flex gap-x-20 justify-between gap-y-8 items-start md:items-end flex-col md:flex-row'>
            <p className='text-5xl max-w-md'>
              Most
              <br />
              Popular Blog
            </p>
            <div className='flex flex-col justify-evenly'>
              <div className='flex text-2xl gap-4'>
                <TbNorthStar />
                <GiFlowerStar />
              </div>
              <p className='max-w-sm'>Learn from our experts in multiple fields of business that will help your team grow.</p>
            </div>
            <Button className='rounded-full'>Learn More</Button>
          </div>
        </div>
        <div className='py-12 flex flex-col gap-8 container mx-auto'>
          <HoverEffect3 items={blog} />
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Blog;
