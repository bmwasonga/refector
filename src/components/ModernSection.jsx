import React from 'react'
import IMAGES from '../images/Images'

function ModernSection() {
  return (
    <div className="shadow-lg backdrop-blur-[100px] self-center w-full max-w-[1179px] pt-0 pb-0 pl-24 pr-1 rounded-2xl border-[1.772px] border-solid border-white max-md:max-w-full max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
          <div className="items-start flex mr-0 flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-black text-5xl font-bold self-stretch max-md:max-w-full max-md:text-4xl">
              Modern POS software built for your business.{" "}
            </div>
            <div className="text-black text-lg leading-8 self-stretch mt-8 max-md:max-w-full">
              Introducing a powerful solution that will change how you sell
              and manage a retail outlet at all levels, from small shops to
              supermarkets
            </div>
            <div className="items-start self-stretch flex w-full justify-between gap-5 mt-8 max-md:flex-wrap">
              <div className="text-white text-base font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center shadow-sm bg-teal-700 w-[147px] max-w-full px-11 py-2.5 rounded-[88px] max-md:px-5">
                Sign up
              </div>
              <div className="text-teal-700 text-sm font-bold leading-6 self-center whitespace-nowrap my-auto">
                Learn more
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src={IMAGES.image2}
            alt={"logo"}
            loading="lazy"
            className="aspect-[1.03] object-contain object-center w-[697px] overflow-hidden max-w-full max-md:mt-0"
          />
        </div>
      </div>
    </div>
  )
}

export default ModernSection