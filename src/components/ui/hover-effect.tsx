import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./button";
import { TfiArrowTopRight } from "react-icons/tfi";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    icon: string;
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={idx}
          className='relative group  block p-2 h-full w-full'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-neutral-800 dark:bg-slate-800/[0.8] block  rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className='group/card shadow-md'>
            <img src={item.icon} alt={item.title} />
            <CardTitle className='text-2xl font-normal mt-8'>{item.title}</CardTitle>
            <CardDescription className='mt-8 w-3/4'>{item.description}</CardDescription>
            <Button className='rounded-full py-3 px-8 group-hover/card:-translate-y-1 mt-6 transition-all bg-slate-50' variant='outline'>
              <TfiArrowTopRight className='mt-0.5' />
            </Button>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent dark:border-white/[0.2] relative z-20",
        className
      )}
    >
      <div className='relative z-10'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("font-bold tracking-wide mt-4", className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("mt-8 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};
