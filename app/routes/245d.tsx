import { waiverServiceCategories } from '../src/constants';
import { puzzleBrain } from '../images';
import ClientRehabFlow from '~/src/Components/ClientRehabFlow';

export default function Services() {
	return (
		<div className='pt-24 sm:pt-32'>
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
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-5xl lg:mx-0 grid'>
					<h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
						What is 245D?
					</h2>
					<div className='mx-auto max-w-2xl sm:row-start-2'>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							245D Home and Community-Based Services are designed to support
							individuals with mental health needs in their own homes and
							communities. These services focus on promoting independence,
							recovery, and overall well-being by providing personalized care
							and support. Services may include case management, skill
							development, crisis intervention, and assistance with daily living
							activities.
						</p>
					</div>
					<img
						src={puzzleBrain}
						alt='puzzle brain'
						className='mx-10 my-10 lg:mx-0 lg:max-w-none row-start-2'
					/>
				</div>
				<div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
					<div className='text-base font-semibold leading-7 text-gray-600 indent-8 '>
						{waiverServiceCategories.map((service) => (
							<li key={service.name}>{service.name}</li>
						))}
					</div>
				</div>
				{/* consider adding some sort of flow here for 245D */}
				{/* <ClientRehabFlow /> */}
			</div>
		</div>
	);
}
