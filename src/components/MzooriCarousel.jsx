import { Swiper, SwiperSlide } from 'swiper/react';

import IMAGES from '../images/Images';

const MzooriCarousel = () => {
	const cardData = [
		{
			id: 1,
			title: 'Advanced inventory management',
			description:
				'Generate purchase orders and transfer stock based on inventory forecasts and performance.',
		},
		{
			id: 2,
			title: 'Custom staff permissions',
			description:
				'Set permissions to control staff acce`ss in the POS system so you can delegate with peace of mind.',
		},
		{
			id: 3,
			title: 'Unified reporting',
			description:
				'Adapt to growing trends in your business with unified analytics that blend in-store and online sales.',
		},
		{
			id: 4,
			title: 'Advanced inventory management',
			description:
				'Generate purchase orders and transfer stock based on inventory forecasts and performance.',
		},
		{
			id: 5,
			title: 'Send cart to buy online',
			description:
				'Send customers an email with items they were interested in but didnt purchase in store.',
		},
		{
			id: 6,
			title: 'Custom staff permisions',
			description:
				'Set permissions to controll staff access in the POS system so you can delegate with Peace of mind',
		},
	];

	return (
		<>
			<Swiper className='w-full h-full'>
				{cardData.map((card) => (
					<SwiperSlide
						className='!flex items-center justify-center'
						key={card.id}>
						<div className='flex w-full h-full content-center justify-center shadow-lg bg-green-200 rounded-lg m-8'>
							<div className=' flex flex-col '>
								{/* image */}
								<img loading='lazy' src='' className='' />
								{/* content */}

								<div className=''>{card.title}</div>
								<div className=''>{card.description}</div>
								<div className=' flex flex-col'>
									<div className=''>View all Mzoori POS features</div>
									<img
										loading='lazy'
										src=''
										className='aspect-[0.79] object-contain object-center w-[19px] overflow-hidden self-stretch max-w-full'
									/>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default MzooriCarousel;
