import React from 'react'
import IMAGES from '../images/Images';

function CustomerReview() {
  return (
    <>
   <div className="bg-teal-500">
  <div className="items-start flex w-[632px] max-w-full grow flex-col mt-20 self-start max-md:mt-10">
    <div className="text-white text-5xl font-bold self-start max-md:max-w-full max-md:text-4xl">
      Our customer reviews speak for themselves
    </div>
    <div className="items-start flex w-[297px] max-w-full justify-between gap-5 mt-2.5 self-start">
      <div className="text-yellow-400 text-sm self-center grow shrink basis-auto my-auto">
        Read real customer reviews on G2
      </div>
    </div>
  </div>
  <div className="flex flex-col pt-60 max-md:pt-24">
    <div className="shadow-lg backdrop-blur-[100px] self-stretch w-full pt-0 mt-60 pl-24 rounded-2xl border-[1.772px] border-solid border-white max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
          <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="items-start self-stretch flex flex-col max-md:max-w-full">
              <div className="text-white text-5xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">
                Let us be part of your growth journey
              </div>
              <div className="text-white text-base leading-6 self-stretch mt-7 max-md:max-w-full">
                Our ultimate vision is to bring producers closer to their
                consumers through retailers like you. We believe technology is
                unlocking the potential of retail, and we’d love to partner
                with you and move your business forward.
              </div>
            </div>
            <div className="justify-center items-start self-stretch bg-white bg-opacity-20 flex grow flex-col mt-8 pl-8 pr-20 py-8 rounded-md max-md:max-w-full max-md:px-5">
              <div className="text-white text-2xl font-bold leading-8 w-[346px] max-w-full self-start">
                Do own or think of setting up a retail outlet? Talk to us.
              </div>
              <div className="items-start flex w-[106px] max-w-full gap-2.5 mt-5 self-start">
                <div className="text-teal-700 text-sm self-center my-auto">
                  Book a call
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
          <div className="grow max-md:max-w-full max-md:mt-0">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-9/12 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src={IMAGES.image10}
                  alt={"logo"}
                  className="aspect-[0.6] object-contain object-center w-full overflow-hidden grow max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </> 
  );
}

export default CustomerReview