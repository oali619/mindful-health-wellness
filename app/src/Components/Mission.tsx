import { values } from '../constants';
import { mission1, mission2, mission3, mission4 } from '../../images';

export default function Mission() {
	return (
		<>
			<div
				aria-hidden='true'
				className='hidden absolute blur-3xl sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu '
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className='aspect-[1400/845] w-[68.5625rem] bg-gradient-to-tr from-[#B9F6CA] to-[#00C853] opacity-20'
				/>
			</div>
			<div className='mb-2 border-b border-green-900/10' />
			<div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-8 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
				<div>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Mission
					</h2>
					<p className='mt-4 text-gray-500'>
						Our mission is to empower individuals and communities by providing
						compassionate, evidence-based social work services that promote
						well-being, resilience, and social justice. We are committed to
						fostering positive change through personalized support, advocacy,
						and collaboration, ensuring that every person has the opportunity to
						thrive.
					</p>

					<h2 className='mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Values
					</h2>
					<dl className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
						{values.map((value) => (
							<div key={value.name} className='border-t border-gray-200 pt-4'>
								<dt className='font-medium text-gray-900'>{value.name}</dt>
								<dd className='mt-2 text-sm text-gray-500'>
									{value.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
					<img
						alt='Social worker with client in office.'
						src={mission1}
						className='rounded-lg bg-gray-100'
					/>
					<img
						alt='Social worker with client in office.'
						src={mission2}
						className='rounded-lg bg-gray-100'
					/>
					<img
						alt='Social worker with client in office.'
						src={mission3}
						className='rounded-lg bg-gray-100'
					/>
					<img
						alt='Social worker with client in office.'
						src={mission4}
						className='rounded-lg bg-gray-100'
					/>
				</div>
			</div>
		</>
	);
}
