import { dhsImage, helpingHand, housing } from '../images';

export const navigation = [
	{ name: 'Home', to: '/', current: true },
	{ name: 'Services', to: '/services', current: false },
	{ name: 'Success Stories', current: false, to: '/#successStories' },
	{ name: 'Referral', to: '/referral', current: false },
	{ name: 'Team', to: '/team', current: false },
	{ name: 'Contact', to: '/contact', current: false },
];

export const services = [
	{
		name: 'Adult Rehabilitation Mental Health Services',
		description: 'Mental health recovery services for adults',
		imageSrc: helpingHand,
		imageAlt: 'Therapist sitting and listening to a patient',
		href: '/services',
	},
	{
		name: 'Housing Stabilization Services',
		description: 'Click the image to visit our sister company',
		imageSrc: housing,
		imageAlt: 'Hand handing over a pair of keys',
		href: 'https://www.alliedhealthmn.com/services',
	},
	{
		name: '245D Services',
		description: 'coming soon',
		imageSrc: dhsImage,
		imageAlt: 'Case Manager providing in home care to elderly client',
		href: '/',
	},
];

export const values = [
	{
		name: 'Empathy',
		description:
			'We approach every situation with deep understanding and compassion for the experiences and emotions of others.',
	},
	{
		name: 'Integrity',
		description:
			'We uphold the highest standards of honesty, transparency, and ethical practice in all our interactions.',
	},
	{
		name: 'Advocacy',
		description:
			'We champion the rights and needs of individuals and communities, striving to create a more just and equitable society.',
	},
	{
		name: 'Collaboration',
		description:
			'We believe in the power of partnerships and teamwork to achieve the best outcomes for those we serve.',
	},
	{
		name: 'Respect',
		description:
			'We honor the dignity, worth, and unique perspectives of every individual, fostering an inclusive and supportive environment.',
	},
	{
		name: 'Empowerment',
		description:
			'We are dedicated to helping others realize their potential, encouraging self-sufficiency and personal growth.',
	},
];

export const testimonials = [
	{
		profileImageSrc:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
		heading: 'Compassion and Professionalism',
		quote:
			'Allied Health Services has been a lifesaver for me and my family. After struggling with housing instability for years, their team stepped in and provided us with the support and resources we desperately needed. Thanks to their guidance, we were able to secure a safe, affordable home and start rebuilding our lives. I’m so grateful for their compassionate and professional approach!',
		customerName: 'Anonymous Client',
		customerLocation: 'Brooklyn Center, MN',
	},
	{
		profileImageSrc:
			'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
		heading: 'Tough times never last...',
		quote:
			'I can’t thank Allied Health Services enough for their help during one of the toughest times in my life. They provided me with the tools and support to find stable housing, and they were always there to answer my questions and guide me through the process. The level of care and dedication they showed made all the difference in turning my situation around.',
		customerName: 'Anonymous Client',
		customerLocation: 'St. Paul, MN',
	},
	{
		profileImageSrc:
			'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
		heading: '10/10 Experience!',
		quote:
			'Working with Allied Health Services has been an incredible experience. Their staff is knowledgeable, kind, and genuinely invested in helping people succeed. They took the time to understand my situation and tailored their services to fit my needs. Because of their hard work and dedication, I now have a stable home and the peace of mind that comes with it."',
		customerName: 'Anonymous Client',
		customerLocation: 'Burnsville, MN',
	},
];

export const armhsServiceCategories = [
	{ name: 'Basic Living and Social Skills' },
	{ name: 'Certified Peer Specialist Services' },
	{ name: 'Community Intervention' },
	{ name: 'Functional Assessment' },
	{ name: 'Level of Care Assessment' },
	{ name: 'Individual Treatment Plan' },
	{ name: 'Medication Education' },
	{ name: 'Transition to Community Living Services' },
];

export const armhsServiceTypes = [
	{
		name: 'Diagnostic Assessment',
		value:
			'Diagnostic assessment is a comprehensive evaluation of a person’s mental health, substance use, and physical health needs.',
	},
	{
		name: 'Functional Assessment',
		value:
			'Functional assessment is a comprehensive evaluation of a person’s mental health, substance use, and physical health needs.',
	},
	{
		name: 'Individual Treatment Plan',
		value:
			'Individual treatment plan is a written plan that outlines the goals and objectives of a person’s mental health treatment.',
	},
	{
		name: 'Progress Notes',
		value:
			'Progress notes are written records of a person’s mental health treatment, including the services provided and the person’s progress.',
	},
];

export const referrerType = [
	{ id: 1, type: 'Case Manager' },
	{ id: 2, type: 'Physician' },
	{ id: 3, type: 'Mental Health Professional' },
	{ id: 4, type: 'Self' },
	{ id: 5, type: 'Other' },
];

export const insuranceTypes = [
	{ id: 1, type: 'Medical Assistance' },
	{ id: 2, type: 'UCare' },
	{ id: 3, type: 'Blue Cross Blue Shield' },
	{ id: 4, type: 'Health Partners' },
	{ id: 5, type: 'Hennepin Health' },
	{ id: 6, type: 'Medica' },
	{ id: 7, type: 'Other' },
];

export const waiverTypes = [
	{ id: 1, type: 'Community Alternative Care Waiver (CAC)' },
	{ id: 2, type: 'Community Access for Disability Inclusion Waiver (CADI)' },
	{ id: 3, type: 'Developmental Disabilities Waiver (DD)' },
	{ id: 4, type: 'Brain Injury Waiver (BI)' },
	{ id: 5, type: 'Elderly Waiver (EW)' },
	{ id: 6, type: 'Alternative Care Waiver (AC)' },
	{ id: 7, type: 'Other' },
];


export const employees = [
	{
		name: 'Obsa Ali, CPA (Inactive)',
		role: 'Director',
		location: 'Greater Minneapolis/St. Paul',
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
	},
	{
		name: 'Lensa Ali, MD',
		role: 'Clical Supervisor',
		location: 'Greater Minneapolis/St. Paul',
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
	},
	{
		name: 'Dunia Ahmed, LICSW',
		role: 'Clical Supervisor',
		location: 'Greater Minneapolis/St. Paul',
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
	},
	{
		name: 'Hunnan Khan, PA',
		role: 'ARMHS Practitioner',
		location: 'Greater Minneapolis/St. Paul',
		img: 'https://tailwindui.com/img/logos/mark.svg?color=green&shade=500',
	},
	{
		name: 'Ismail Ali',
		role: 'ARMHS Worker',
		location: 'Greater Minneapolis/St. Paul',
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
	},
	{
		name: 'Hamza Ali',
		role: 'ARMHS Worker',
		location: 'Greater Minneapolis/St. Paul',
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
	},
	{
		name: 'Zahra Abdullahi',
		role: 'Outreach Coordinator',
		location: 'Greater Minneapolis/St. Paul',
		img: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
	},
];
