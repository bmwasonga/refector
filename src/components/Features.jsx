import React from 'react'
import IMAGES from '../images/Images'

function Features() {
  return (
    <>
     <div className="items-center self-center flex ml-0 w-[843px] max-w-full flex-col mt-24 px-5 max-md:mt-10">
          <div className="text-teal-600 text-center text-5xl font-bold self-center whitespace-nowrap max-md:text-4xl">
            Bring them back
          </div>
          <div className="bg-slate-500 self-center w-[147px] h-px mt-8" />
          <div className="text-black text-center text-2xl leading-8 self-stretch -mr-5 mt-8 max-md:max-w-full">
            Turn one-time customers into lifetime fans with a point of sale
            system that supports your staff in creating meaningful customer
            relationships.
          </div>
        </div>
        <div className="self-center w-full max-w-[980px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                <img
                  loading="lazy"
                  src={IMAGES.image11}
                  alt={"logo"}
                  className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                />
                <div className="text-black text-2xl font-bold mt-7 self-start">
                  Fully synced customer profiles
                </div>
                <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                  Offer personalized experiences with quick access to order
                  history, lifetime spend, and more in the POS system.
                </div>
                <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                  <div className="text-teal-500 text-sm my-auto">
                    View all Mzoori POS features
                  </div>
                  <img
                   src={IMAGES.image12}
                   alt={"logo"}
                    className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                <img
                  loading="lazy"
                  src={IMAGES.image11}
                  alt={"logo"}
                  className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                />
                <div className="text-black text-2xl font-bold mt-7 self-start">
                  Effective marketing
                  <br />
                </div>
                <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                  Collect contact details and tailor marketing campaigns to
                  share exclusive discounts and sneak previews.
                </div>
                <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                  <div className="text-teal-500 text-sm my-auto">
                    View all Mzoori POS features
                  </div>
                  <img
                    loading="lazy"
                    src={IMAGES.image12}
                   alt={"logo"}
                    className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start border shadow-lg bg-white flex w-full max-w-[312px] grow flex-col mx-auto pl-4 pr-3.5 py-4 rounded-xl border-solid border-zinc-100 max-md:mt-6">
                <img
                  loading="lazy"
                  src={IMAGES.image11}
                  alt={"logo"}
                  className="aspect-square object-contain object-center w-[60px] justify-center items-center overflow-hidden max-w-full self-start"
                />
                <div className="text-black text-2xl font-bold mt-7 self-start">
                  Integrated loyalty programs
                </div>
                <div className="text-neutral-500 text-base leading-7 mt-7 self-start">
                  Add loyalty apps to your POS system to reward customers for
                  shopping with you, both in store and online.
                  <br />
                </div>
                <div className="items-start flex w-full justify-between gap-5 mt-7 pr-px self-start">
                  <div className="text-teal-500 text-sm my-auto">
                    View all Mzoori POS features
                  </div>
                  <img
                    loading="lazy"
                    src={IMAGES.image12}
                   alt={"logo"}
                    className="aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Features