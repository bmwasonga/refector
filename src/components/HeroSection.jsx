import React from 'react';
import IMAGES from '../images/Images';

function HeroSection() {
	return (
		<div className='flex-col overflow-hidden self-stretch relative flex min-h-[1024px] w-full pt-36 pb-60 px-20 max-md:max-w-full max-md:px-5 max-md:py-24 bg-teal-500'>
			{' '}
			<img
				loading='lazy'
				src={IMAGES.image13}
				alt={'logo'}
				className='absolute z-[-1] h-full w-full object-cover object-center inset-0'
			/>
			<div className='relative items-center self-center flex mb-0 w-[740px] max-w-full flex-col max-md:mb-2.5'>
				<img
					src={IMAGES.image1}
					alt={'logo'}
					className='object-contain object-center w-[300px] overflow-hidden self-center max-w-full'
				/>
				<div className='bg-slate-500 bg-opacity-0 self-center w-[147px] h-px mt-8' />
				<div className='text-white text-center text-7xl font-bold leading-[77px] tracking-tighter self-stretch mt-8 max-md:max-w-full max-md:text-4xl'>
					<span className='text-yellow-400'>
						Unlock your
						<br /> businesses{' '}
					</span>
					<span className='text-white'>
						potential with a full PoS
						<br /> solution.{' '}
					</span>
				</div>
				<div className='bg-white self-center w-[147px] h-px mt-8' />
				<div className='text-white text-center text-2xl leading-9 self-center max-w-[702px] mt-8 max-md:max-w-full'>
					The POS system with everything you need to sell in person, backed by
					everything you need to sell online.
				</div>
				<div className='self-center flex w-[311px] max-w-full items-start gap-5 mt-8'>
					<div className='text-white text-base font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center border shadow-sm flex-1 pl-12 pr-12 py-2.5 rounded-[68px] border-solid border-white max-md:px-5'>
						Sign in
					</div>
					<div className='text-teal-700 text-base font-bold leading-6 self-stretch whitespace-nowrap justify-center items-center shadow-sm bg-white flex-1 px-11 py-2.5 rounded-[88px] max-md:px-5'>
						Sign up
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
