import React from 'react';
import { css } from 'styled-components/macro'; //eslint-disable-line

import { logo } from '../../images';

export default function Footer2() {
	return (
		<div className='relative bg-green-800 text-gray-100 -mx-8 -mb-8 px-8'>
			<div className='max-w-screen-xl mx-auto pt-16 pb-8'>
				<div className='flex flex-wrap justify-between'>
					<div className='text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5'>
						<div className='flex items-center justify-center lg:justify-start'>
							<img className='w-8' src={logo} />
							<h5 className='ml-2 text-xl font-black'>
								Mindful Health & Wellness
							</h5>
						</div>
						<p className='mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left'>
							6040 Earle Brown Dr Ste 310B Brooklyn Center, Minnesota 55430
						</p>
						{/* <div className='mt-4 text-center lg:text-left'>
							<SocialLink href='https://facebook.com'>
								<FacebookIcon />
							</SocialLink>
							<SocialLink href='https://twitter.com'>
								<TwitterIcon />
							</SocialLink>
							<SocialLink href='https://youtube.com'>
								<YoutubeIcon />
							</SocialLink>
						</div> */}
					</div>
					<div className='w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left'>
						<div className='font-bold uppercase'>Quick Links</div>
						<ul className='mt-4 text-sm font-medium'>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Blog
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									FAQs
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Support
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									About Us
								</a>
							</li>
						</ul>
					</div>
					<div className='w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left'>
						<div className='font-bold uppercase'>Product</div>
						<ul className='mt-4 text-sm font-medium'>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Log In
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Personal
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Business
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Team
								</a>
							</li>
						</ul>
					</div>
					<div className='w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left'>
						<div className='font-bold uppercase'>Legal</div>
						<ul className='mt-4 text-sm font-medium'>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									GDPR
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Privacy Policy
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Terms of Service
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Disclaimer
								</a>
							</li>
						</ul>
					</div>
					<div className='w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left'>
						<div className='font-bold uppercase'>Contact</div>
						<ul className='mt-4 text-sm font-medium'>
							<li className='mt-3'>+1 (612) 990-3110</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='mailto:contact@mindfulhealthmn.org'
								>
									contact@mindfulhealthmn.org
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Sales
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									Report Abuse
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='my-8 border-b-2 border-white' />
				<div className='pb-0 text-sm font-normal items-center'>
					&copy; Copyright 2024, Mindful Health & Wellness LLC
				</div>
			</div>
		</div>
	);
}
