import ArticleSection from '@/app/(site)/projects/components/projects-content/utils/article-section';
import LineSpacer from '@/app/(site)/projects/components/projects-content/utils/line-spacer';
import { FC } from 'react';

const EarleWilsonContent: FC = () => {
	return (
		<article className="text-lg">
			<p>
				When I first started working on the Earle & Wilson Law Firm website, I
				knew I wanted to create something that was not only visually appealing but
				also technically robust and secure. The goal was to craft a digital
				experience that would stand out in the legal sector while keeping the
				underlying code modern, maintainable, and efficient.
			</p>
			<ArticleSection title="The Tech Stack" collapsible>
				For the front-end, we chose Next.js combined with Typescript, Sass, and
				TailwindCSS. The journey began in Figma, where we designed a clean,
				intuitive interface. Translating that design into code was a
				delight—Next.js allowed us to build a fast, SEO-friendly web application
				while Tailwind and Sass helped us implement a highly responsive and
				visually consistent UI. We also took security seriously, implementing
				secure cookies and other best practices to ensure user data remained
				protected.
				<LineSpacer />
				On the back-end, we leveraged Next.js API routes to keep everything within
				the same framework, which simplified our development process. PostgreSQL
				was chosen to store user information for our custom-built CMS—a tool we
				developed to let the law firm manage website content effortlessly. In
				addition, Redis was incorporated for geolocation-based bucket
				rate-limiting, ensuring that our API could handle bursts of traffic
				without compromising performance or security.
			</ArticleSection>
			<ArticleSection title="Custom CMS and Data Management" collapsible>
				One of the most interesting parts of the project was building a custom
				content management system CMS from scratch. The idea was to empower the
				law firm with a user-friendly admin dashboard where authorized users could
				update website content directly. Content is stored locally in JSON files
				on the server, and our API not only interacts with PostgreSQL and Redis
				but also handles these JSON data modifications. With robust validation in
				place, we made sure that every change maintains data accuracy and
				consistency. The CMS supports rich HTML text editing and offers flexible
				management of images—allowing users to add, remove, or rearrange them as
				needed.
			</ArticleSection>
			<ArticleSection title="DevOps and Deployment" collapsible>
				We automated much of our workflow with GitHub Actions, ensuring that every
				push was tested and built according to the latest standards. The final
				product is hosted on a VPS from DigitalOcean and served via Nginx, a
				combination that provides both performance and reliability. To keep an eye
				on everything in production, we integrated Sentry to monitor errors, which
				gives us the confidence to push updates frequently without worry.
			</ArticleSection>
			<ArticleSection title="Reflections">
				Working on the Earle & Wilson Law Firm website was both challenging and
				incredibly rewarding. It was an opportunity to blend modern technologies
				with practical solutions tailored for the legal industry. Every layer—from
				the intuitive front-end to the robust back-end services and custom CMS—was
				designed to create a seamless experience for both the firm&apos;s team and
				its clients.
				<LineSpacer />
				This project stands as a testament to how modern web technologies can
				transform even the most traditional fields, bringing efficiency, security,
				and a touch of innovation to everyday operations.
			</ArticleSection>
		</article>
	);
};

export default EarleWilsonContent;
