import React from "react";
import { Image } from "astro:assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServiceCarousel: React.FC = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col p-8 gap-12 border border-black justify-center items-center">
              <div>Webflow</div>
              <div className="flex flex-col gap-6">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare."
                </p>
                <div className="flex gap-5">
                  <div>
                    <img src={`/icon/icon${index + 1}.svg`} alt="hogehuga" />
                  </div>
                  <div>
                    <p className="font-bold">Name Surname</p>
                    <p>Position, Company name</p>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ServiceCarousel;
