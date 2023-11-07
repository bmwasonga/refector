import IMAGES from '../images/Images';

function Specs() {
	return (
		<>
			<div className='self-stretch pr-36 max-md:max-w-full max-md:pr-5 w-3/4'>
				<div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
					<div className='flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0'>
						<img
							src={IMAGES.image3}
							alt={'logo'}
							loading='lazy'
							className='aspect-[1.13] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10'
						/>
					</div>
					<div className='flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0'>
						<div className='items-start flex flex-col my-auto max-md:mt-10'>
							<div className='text-black text-4xl font-bold self-stretch'>
								Fully integrated hardware
							</div>
							<div className='text-zinc-500 text-2xl leading-8 self-stretch mt-8'>
								Get the perfect POS setup, whether you’re a pop up shop or a
								retail store. Mzoori POS connects seamlessly with all card
								readers and compatible hardware accessories.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='self-stretch mt-28 px-5 max-md:max-w-full max-md:mt-10'>
				<div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
					<div className='flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0'>
						<div className='items-start flex flex-col my-auto max-md:mt-10'>
							<div className='text-black text-4xl font-bold self-stretch'>
								Customizable POS terminal
							</div>
							<div className='text-zinc-500 text-2xl leading-8 self-stretch mt-8'>
								Personalize your POS system to your business. Keep your
								most-used apps, discounts, and products at your fingertips so
								you can fly through checkout.
							</div>
						</div>
					</div>
					<div className='flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0'>
						<img
							src={IMAGES.image3}
							alt={'logo'}
							loading='lazy'
							className='aspect-[1.13] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10'
						/>
					</div>
				</div>
			</div>
			<div className='self-stretch mt-28 pr-36 max-md:max-w-full max-md:mt-10 max-md:pr-5'>
				<div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
					<div className='flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0'>
						<img
							src={IMAGES.image3}
							alt={'logo'}
							loading='lazy'
							className='aspect-[1.13] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10'
						/>
					</div>
					<div className='flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0'>
						<div className='items-start flex flex-col my-auto max-md:mt-10'>
							<div className='text-black text-4xl font-bold self-stretch'>
								Powerful POS software
							</div>
							<div className='text-zinc-500 text-2xl leading-8 self-stretch mt-8'>
								Turn any mobile device into a powerful point of sale. You can
								download the Mzoori POS app on to any Android or iOS smartphone
								or tablet.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Specs;
