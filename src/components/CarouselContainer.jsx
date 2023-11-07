import MzooriCarousel from './MzooriCarousel';

function CarouselContainer() {
	return (
		<div className='items-center shadow-lg bg-slate-50 self-stretch flex flex-col mt-24 pb-24 rounded-2xl max-md:max-w-full max-md:mt-10'>
			{/* description */}

			<div className='grid grid-cols-2  '>
				<h1 className='text-black text-5xl font-bold flex-1 max-md:max-w-full max-md:text-4xl max-md:mt-10'>
					Power your retail business
				</h1>
				<h1 className='text-black text-2xl leading-8 flex-1 max-md:max-w-full max-md:mt-10'>
					Get the tools you need to run your retail store. Mzoori’s all-in-one
					POS system comes with inventory tracking, staff management, and more.
				</h1>
			</div>

			{/* Carousel goes here */}
			<MzooriCarousel />

			{/* <div className='items-start flex flex-col'>
				<div className='self-stretch w-full px-5 max-md:max-w-full'>
					<div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
						<div className='flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0'>
							<div className='text-black text-5xl font-bold flex-1 max-md:max-w-full max-md:text-4xl max-md:mt-10'>
								Power your retail business
							</div>
						</div>
						<div className='flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0'>
							<div className='text-black text-2xl leading-8 flex-1 max-md:max-w-full max-md:mt-10'>
								Get the tools you need to run your retail store. Mzoori’s
								all-in-one POS system comes with inventory tracking, staff
								management, and more.
							</div>
						</div>
					</div>
				</div>
			</div>

			<MzooriCarousel /> */}
		</div>
	);
}

export default CarouselContainer;
