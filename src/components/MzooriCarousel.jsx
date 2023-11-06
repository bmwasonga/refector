import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import IMAGES from '../images/Images';

const MzooriCarousel = () => {

  const cardData = [
    {
      title: 'Advanced inventory management',
      description: 'Generate purchase orders and transfer stock based on inventory forecasts and performance.',
    },
    {
      title: 'Custom staff permissions',
      description: 'Set permissions to control staff access in the POS system so you can delegate with peace of mind.',
    },
    {
      title: 'Unified reporting',
      description: 'Adapt to growing trends in your business with unified analytics that blend in-store and online sales.',
    },
    {
      title: 'Send cart to buy online',
      description: 'Send customers an email with items they were interested in but didnt purchase in store.',
    },
    
  ];

  return (
    <Carousel>
     {cardData.map((card, index) => (
        <div key={index}>
          <div className="items-start shadow-lg bg-green-200 flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl max-md:mt-7">
            <img
              loading="lazy"
              src=""
              className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
            />
            <div className="text-black text-2xl font-bold mt-7 self-start">
              {card.title}
            </div>
            <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
              {card.description}
            </div>
            <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
              <div className="text-black text-sm font-bold my-auto">
                View all Mzoori POS features
              </div>
              <img
                loading="lazy"
                src=""
                className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MzooriCarousel;
