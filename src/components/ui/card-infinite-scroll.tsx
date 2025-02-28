import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import icon14 from "@/assets/img/icon/14.png";
import { Skeleton } from "./skeleton";

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 10000);
  }, [api, current]);

  return (
    <div className='container mx-auto'>
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className='basis-1/2 lg:basis-1/3' key={index}>
              <div className='flex rounded-md bg-white/70 justify-start p-6 flex-col gap-4'>
                <img src={icon14} alt='icon14' className='w-14' />
                <Skeleton className='w-full h-4' />
                <Skeleton className='w-full h-12' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export { Case };
