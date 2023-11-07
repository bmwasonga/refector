import * as React from 'react';
import HeroSection from '../components/HeroSection';
import ModernSection from '../components/ModernSection';
import Specs from '../components/Specs';
import CTA from '../components/CTA';
import Features from '../components/Features';
import PosHardware from '../components/PosHardware';
import Resources from '../components/Resources';
import CustomerReview from '../components/CustomerReview';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import CarouselContainer from '../components/CarouselContainer';

function LandingPage() {
	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<div className=' flex flex-col justify-center h-3/4'>
					<HeroSection />
					<ModernSection />
				</div>
				<div className='w-3/4 flex-col'>
					<Specs />
				</div>
				<div className='w-11/12 flex items-end'>
					<CarouselContainer />
				</div>
			</div>
			{/* <div className='bg-white flex flex-col overflow-hidden'>
				<HeroSection />
				<div className='self-center z-[50] flex mt-0 w-full max-w-[1331px] flex-col max-md:max-w-full'>
					<ModernSection />
					<div className='items-start self-center flex w-full max-w-[1124px] flex-col mt-28 max-md:max-w-full max-md:mt-10'>
						<Specs />
					</div>
					<div className='items-center shadow-lg bg-slate-50 self-stretch flex flex-col mt-24 pb-24 rounded-2xl max-md:max-w-full max-md:mt-10'>
						<div className='flex w-[277px] max-w-full items-start gap-0 pr-6 self-start max-md:pr-5'></div>
						<div className='items-start self-center flex w-full max-w-[1233px] flex-col max-md:max-w-full'>
							<CarouselContainer />
							<div className='self-stretch mt-11 pr-44 max-md:max-w-full max-md:mt-10 max-md:pr-5'>
								<CTA />
							</div>
						</div>
					</div>
					<Features />
					<div className='self-stretch mt-24 pr-56 max-md:max-w-full max-md:mt-10 max-md:pr-5'>
						<PosHardware />
					</div>
				</div>
				<Resources />
				<CustomerReview />
				<FAQ />
				<Footer />
			</div> */}
		</>
	);
}
export default LandingPage;
