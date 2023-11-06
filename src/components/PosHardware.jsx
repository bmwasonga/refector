import React from 'react';
import IMAGES from '../images/Images';

function PosHardware() {
	return (
		<div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 self-center'>
			<div className='flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0'>
				<img
					loading='lazy'
					src={IMAGES.image4}
					alt={'logo'}
					className='aspect-[1.02] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7'
				/>
			</div>
			<div className='flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0'>
				<div className='items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10'>
					<div className='text-slate-600 text-4xl font-bold leading-[48.24px] self-stretch max-md:max-w-full'>
						Powerful POS hardware you can count on
					</div>
					<div className='text-black text-2xl leading-8 self-stretch mt-10 max-md:max-w-full max-md:mt-10'>
						Mzoori’s sleek POS hardware comes with built-in payment processing
						and competitive credit card rates. You’ll be able to accept all the
						major payment methods and look good doing it too.
					</div>
					<div className='items-start self-stretch flex w-full justify-between gap-5 mt-10 pr-px max-md:flex-wrap max-md:mt-10'>
						<div className='text-teal-500 text-sm font-bold self-center grow shrink basis-auto my-auto'>
							Learn more about POS hardware
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PosHardware;
