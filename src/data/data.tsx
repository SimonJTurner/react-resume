import {
	AcademicCapIcon,
	CalendarIcon,
	DownloadIcon,
	FlagIcon,
	MapIcon,
	OfficeBuildingIcon,
	SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/abasin.webp';
import profilepic from '../images/melly_med.jpeg';
import testimonialImage from '../images/testimonial.webp';
import {
	About,
	ContactSection,
	ContactType,
	Hero,
	HomepageMeta,
	PortfolioItem,
	SkillGroup,
	Social,
	TestimonialSection,
	TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
	title: 'Simon Turner Personal Page',
	description: "About Simon",
};

/**
 * Section definition
 */
export const SectionId = {
	Hero: 'hero',
	About: 'about',
	Contact: 'contact',
	Portfolio: 'portfolio',
	Resume: 'resume',
	Skills: 'skills',
	Stats: 'stats',
	Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
	imageSrc: heroImage,
	name: `I'm Simon Turner.`,
	description: (
		<>
			<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
				I'm a Denver-based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
				at <strong className="text-stone-100">CapTech Consulting</strong> providing tech expertise to our clients. I love challenging problems and learning new ways to solve them.
			</p>
			<p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
				I love <strong className="text-stone-100">Trail Running</strong> and <strong className="text-stone-100"> skiing</strong>, I've also been reading a lot -- I just finished{' '}
				<strong className="text-stone-100">The Lord of the Rings</strong>.
			</p>
		</>
	),
	actions: [
		{
			href: '/assets/resume.pdf',
			text: 'Resume',
			primary: true,
			Icon: DownloadIcon,
		},
		{
			href: `#${SectionId.Contact}`,
			text: 'Contact',
			primary: false,
		},
	],
};

/**
 * About section
 */
export const aboutData: About = {
	profileImageSrc: profilepic,
	description: `I love teaching and learning, it just happens that tech is the discipline. I love working with people who want to be taught as well as with those who like to teach.`,
	aboutItems: [
		{label: 'Location', text: 'Denver, CO', Icon: MapIcon},
		{label: 'Age', text: '24', Icon: CalendarIcon},
		{label: 'Roles', text: 'Architect/Team Lead', Icon: FlagIcon},
		{label: 'Interests', text: 'Running, Wind Surfing, Reading', Icon: SparklesIcon},
		{label: 'Study', text: 'The Ohio State University', Icon: AcademicCapIcon},
		{label: 'Employment', text: 'CapTech Consulting', Icon: OfficeBuildingIcon},
	],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
	{
		name: 'Soft Skills',
		skills: [
			{
				name: 'Presentation and Public Speaking',
				level: 9,
			},
			{
				name: 'Agile',
				level: 8,
			},
			{
				name: 'Technical Leadership and Coaching',
				level: 7,
			},
		],
	},
	{
		name: 'Frontend development',
		skills: [
			{
				name: 'React',
				level: 7,
			},
			{
				name: 'Typescript',
				level: 7,
			},
			{
				name: 'GraphQL',
				level: 5,
			},
		],
	},
	{
		name: 'Backend development',
		skills: [
			{
				name: 'C#',
				level: 9,
			},
			{
				name: 'Node.js',
				level: 7,
			},
			{
				name: 'Golang',
				level: 4,
			},
		],
	},
	{
		name: 'Cloud and Infrastructure',
		skills: [
			{
				name: 'Azure',
				level: 8,
			},
			{
				name: 'IaC (Terraform/Bicep)',
				level: 7,
			},
			{
				name: 'AWS',
				level: 5,
			},
		],
	},
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
	{
		date: 'December 2019',
		location: 'The Ohio State University',
		title: 'Bachelors of Computer Science and Engineering',
		content: <p>Graduated Magna Cum Laude</p>,
	},
	{
		date: 'January 2020',
		location: 'Amazon Web Services',
		title: 'AWS Certified Developer',
		content: <p>Having worked in AWS during college internships, I started my consulting career by earning a cert.</p>,
	},
];

export const experience: TimelineItem[] = [
	{
		date: 'May 2022-Present',
		location: 'Fortune 100 Retail Client',
		title: 'Technical Lead',
		techStack: ['React', 'Azure', 'Bicep', 'Module Federation'],
		content: (
			<p>
				Supported team of 6 engineers to release modern microfrontend site. Regularly reported outlook and risks to senior program leadership.
			</p>
		),
	},
	{
		date: 'August 2021-May 2022',
		location: 'Fortune 100 Retail Client',
		title: 'Technical Lead',
		techStack: ['C#', 'Azure', 'Bicep', 'ARM', 'Event-Driven Architecture', 'Microservices'],
		content: (
			<p>
				Led a team of 4 engineers to modernize functionality from legacy systems, which enabled creation of new customer experiences.
				Managed backlog and coached engineers.
				Architected services to incrementally replace 3rd-party business unit.
			</p>
		),
	},
	{
		date: 'January 2020-August 2021',
		location: 'Fortune 200 manufacturing Client',
		title: 'Backend Engineer',
		techStack: ['C#', 'Azure', 'Terraform'],
		content: (
			<p>
				Built .NET services to support customer portal for enhanced  planning, purchase, and delivery of products.
			</p>
		),
	},
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
	imageSrc: testimonialImage,
	testimonials: [
		{
			name: 'Client Stakeholder',
			text: 'Not only is Simon technically sound and can lead a group of engineers to solve complex issues; Simon is also extremely easy to work with and always stresses Winning as a team instead of individuals',
			image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
		},
		{
			name: 'Engineering Team Member',
			text: 'He is always thinking big picture and is able to call out any obstacles we may have before they cause us any problems. It is very clear that the client trusts Simon wholly and values his insights greatly',
			image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
		},
		{
			name: 'Client Product Manager',
			text: "He is a great developer and team lead. Simon is very knowledgeable in many topics, and he is always willing to share that knowledge with me. I'm very grateful for that.",
			image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1178.jpg',
		},
	],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
	headerText: "Send me a message, I'll get back to you!",
	description: "Email is usually best, bonus points for clever subject lines!",
	items: [
		{
			type: ContactType.Email,
			text: 'simonjturner43@gmail.com',
			href: 'mailto:simonjturner43@gmail.com',
		},
		{
			type: ContactType.Location,
			text: 'Denver, Colorado',
			href: 'https://www.google.com/maps/place/Denver,+CO',
		},
		{
			type: ContactType.Github,
			text: 'SimonJTurner',
			href: 'https://github.com/SimonJTurner',
		},
	],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
	{label: 'Github', Icon: GithubIcon, href: 'https://github.com/SimonJTurner'},
	{label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/simon-j-turner/'},
];
