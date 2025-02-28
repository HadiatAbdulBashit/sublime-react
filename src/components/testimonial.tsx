import { TbNorthStar } from "react-icons/tb";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { StarRating } from "./ui/star-rating";
import { Card } from "./ui/card";
import { LogoCarousel } from "./ui/logo-carousel";
import people1 from "@/assets/img/people/1.png";
import people2 from "@/assets/img/people/2.png";
import client1 from "@/assets/img/client/1.png";
import client2 from "@/assets/img/client/2.png";
import client3 from "@/assets/img/client/3.png";
import client4 from "@/assets/img/client/4.png";

const allLogos = [
  { name: "1", id: 1, img: client1 },
  { name: "2", id: 2, img: client2 },
  { name: "3", id: 3, img: client3 },
  { name: "1", id: 1, img: client1 },
  { name: "4", id: 4, img: client4 },
  { name: "2", id: 2, img: client2 },
  { name: "3", id: 3, img: client3 },
  { name: "4", id: 4, img: client4 },
];

const Testimonial = () => {
  return (
    <BackgroundGradientAnimation>
      <div className='container mx-auto py-8'>
        <div className='flex gap-8 justify-evenly items-center'>
          <TbNorthStar className='text-3xl' />
          <div className='text-center'>
            <p className='uppercase text-black/60'>Our Testimonials</p>
            <h2 className='text-5xl max-w-lg'>Check out what our customers have to say</h2>
          </div>
          <TbNorthStar className='text-3xl' />
        </div>
        <div className='columns-2 gap-8 max-w-4xl justify-center mx-auto mt-24'>
          <Card className='h-full p-8 flex flex-col gap-8 bg-white/50 mb-8'>
            <StarRating defaultValue={4} disabled={true} />
            <p className='italic'>
              "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way."
            </p>
            <div className='flex gap-4'>
              <img src={people1} alt='people1' className='w-12' />
              <div>
                <p className='font-bold'>Sarah Smith</p>
                <p>Marketing Leader @Mailchimp</p>
              </div>
            </div>
          </Card>
          <Card className='h-full p-8 flex flex-col gap-8 bg-white/50 my-8'>
            <StarRating defaultValue={4} disabled={true} />
            <p className='italic'>
              "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way."
            </p>
          </Card>
          <Card className='h-full p-8 flex flex-col gap-8 bg-white/50 my-8'>
            <StarRating defaultValue={4} disabled={true} />
            <p className='italic'>
              "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way."
            </p>
          </Card>
          <Card className='h-full p-8 flex flex-col gap-8 bg-white/50 mt-8'>
            <StarRating defaultValue={4} disabled={true} />
            <p className='italic'>
              "It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way."
            </p>
            <div className='flex gap-4'>
              <img src={people2} alt='people2' className='w-12' />
              <div>
                <p className='font-bold'>Jhon Smith</p>
                <p>UI Designer @Mailchimp</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className='container mx-auto flex flex-col justify-center text-center mb-12'>
        <p className='uppercase'>clients Using SUBLIME</p>
        <div className='flex gap-12 justify-center'>
          <LogoCarousel logos={allLogos} columnCount={4} />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Testimonial;
