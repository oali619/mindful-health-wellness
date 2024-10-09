import type { MetaFunction } from '@remix-run/node';
import { useState, useEffect } from 'react';
import { services, values } from '../src/constants';
import { therapy, mission1, mission2, mission3, mission4 } from '../images';
import Testimonials from '../src/Components/Testimonials';
import Footer from '~/src/Components/Footer';
import Mission from '~/src/Components/Mission';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Mindful Health and Wellness' },
		{ name: 'description', content: 'Welcome to our mental health site!' },
	];
};

export default function Index() {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<>
			<div className='min-h-full mb-0'>
				<div
					aria-hidden='true'
					className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#B9F6CA] to-[#00C853] opacity-20'
					/>
				</div>
				<main>
					<section className='grid mx-auto mt-20 px-4 sm:px-6 lg:px-8'>
						<div className='flex flex-col sm:flex-row justify-center'>
							<div className=' px-4 sm:px-6 lg:px-8 content-center'>
								<h1 className='text-7xl font-bold tracking-tight text-gray-900'>
									Mindful Health & Wellness
								</h1>
								<p className='text-3xl text-right'>
									Adult Rehabilitation Mental Health Services (ARMHS)
								</p>
							</div>
							<img className='rounded-lg sm:mr-4' src={therapy} alt='Housing' />
						</div>
					</section>

					<div className='mx-auto max-w-8xl px-4 py-6 sm:px-6 lg:px-8'>
						<section className='grid' id='services'>
							<div className='mb-2 border-b border-green-900/10' />
							<h2 className='ml-[215px] pt-8 max-w-7xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
								Our Services
							</h2>
							<p className='mt-4 ml-[215px] w-[425px] text-gray-500'>
								We offer a variety of services along with our sister companies
								to help you achieve your goals. Click on each service to learn
								more.
							</p>
							<div>
								<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
									<div className='mx-auto max-w-2xl lg:max-w-none'>
										<div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
											{services.map((service) => (
												<div key={service.name} className='group'>
													<div className='h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
														<a
															href={service.href}
															className='block w-full h-full'
														>
															<img
																alt={service.imageAlt}
																src={service.imageSrc}
																className='h-full w-full object-cover object-center'
															/>
														</a>
													</div>
													<a
														className='mt-6 text-base font-semibold text-gray-900'
														href={service.href}
													>
														{service.name}
													</a>
													<p className='text-sm text-gray-500'>
														{service.description}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</section>

						<section className='grid mt-6' id='mission'>
							<Mission />
						</section>

						<section id='successStories'>
							{isClient && <Testimonials />}
						</section>
						<section id='footer'>
							<Footer />
						</section>
					</div>
				</main>
			</div>
		</>
	);
}
