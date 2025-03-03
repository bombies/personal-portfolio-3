import ArticleSection from '@/app/(site)/projects/components/projects-content/utils/article-section';
import LineSpacer from '@/app/(site)/projects/components/projects-content/utils/line-spacer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FC } from 'react';

const DreamLoggerContent: FC = () => {
	return (
		<article>
			<Accordion type="multiple">
				<AccordionItem value="back-end">
					<AccordionTrigger className="text-3xl text-primary font-bold">The Back-End</AccordionTrigger>
					<AccordionContent className="text-lg">
						The backend of DreamLogger is a robust architecture carefully designed to ensure scalability,
						security, and seamless functionality.
						<LineSpacer />
						<ArticleSection title="Next.js and Prisma">
							The backbone of the backend is built on Next.js, a versatile React framework that enables
							server-side rendering, routing, and efficient development. Prisma, a powerful database
							toolkit, handles database queries efficiently with a type-safe approach, ensuring data
							integrity and minimizing errors.
							<LineSpacer />
							Route handling in DreamLogger is implemented using Next.js Route Handlers, enabling
							efficient request handling and allowing for the creation of dynamic routes that seamlessly
							integrate with the frontend.
						</ArticleSection>
						<ArticleSection title="PostgreSQL">
							DreamLogger utilizes a PostgreSQL database to manage the related nature of the data,
							offering a reliable and scalable solution for storing user information, dream logs, and
							associated metadata.
						</ArticleSection>
						<ArticleSection title="AWS Integration">
							Amazon Simple Storage Service (S3) is employed to store and retrieve static assets, ensuring
							efficient data storage and retrieval.
							<LineSpacer />
							Amazon CloudFront is used as a content delivery network (CDN) to accelerate the distribution
							of static and dynamic web content, improving the overall speed and responsiveness of the
							application.
							<LineSpacer />
							AWS Route53 handles DNS management, providing a scalable and highly available Domain Name
							System (DNS) web service for routing end-user requests to the appropriate resources.
							<LineSpacer />
						</ArticleSection>
						<ArticleSection title="Authentication & Authorization">
							Authentication is achieved through Next-Auth, a secure and versatile authentication library
							for Next.js applications. DreamLogger leverages Google&apos;s OAuth provider to ensure a
							secure and streamlined authentication process. Authorization levels are implemented to
							manage access to various features and functionalities, ensuring that user data is accessed
							only by authorized individuals.
						</ArticleSection>
						<ArticleSection title="Encryption & Data Security">
							Ensuring the security of user data is a top priority for DreamLogger. Several measures are
							in place
							<LineSpacer />
							<ul className="pl-6 list-disc marker:text-primary">
								<li>
									The entire application is served over HTTPS to encrypt data in transit, preventing
									unauthorized access during communication between the user&apos;s browser and the
									server.
								</li>
								<li>
									User passwords are hashed before storage, employing industry-standard hashing
									algorithms to protect sensitive information.
								</li>
								<li>
									Secure cookies are used to manage user sessions securely, preventing unauthorized
									access to sensitive data.
								</li>
								<li>
									Additional layers of security are implemented through client-side encryption,
									enhancing the protection of user data.
								</li>
							</ul>
						</ArticleSection>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="front-end">
					<AccordionTrigger className="text-3xl text-primary font-bold">The Front-End</AccordionTrigger>
					<AccordionContent className="text-lg">
						DreamLogger&apos;s front-end is meticulously crafted to deliver a captivating and user-friendly
						interface, incorporating various technologies to ensure responsiveness, state management, and
						efficient data fetching and mutation.
						<LineSpacer />
						<ArticleSection title="Next.js with TypeScript">
							The front-end is built using Next.js, taking advantage of its powerful features like
							server-side rendering, automatic code splitting, and seamless integration with TypeScript.
							TypeScript adds a layer of static typing for enhanced development and codebase robustness.
						</ArticleSection>
						<ArticleSection title="SWR (State-While-Revalidate)">
							DreamLogger leverages SWR, a React Hooks library for remote data fetching, to optimize the
							user experience. SWR allows for the seamless integration of data from the server while
							providing a responsive and reactive interface.
						</ArticleSection>
						<ArticleSection title="Custom Global Application State Handling">
							To manage global application state, DreamLogger employs React Contexts. This custom state
							management solution ensures a centralized and efficient approach to handling shared state
							across various components, promoting maintainability and scalability.
						</ArticleSection>
						<ArticleSection title="Custom Components and HeroUI">
							DreamLogger&apos;s user interface is enriched by custom components, tailored to the
							application&apos;s unique design. These components are built upon HeroUI, a UI library that
							provides a set of React components with a clean and modern design. This ensures a consistent
							and visually appealing look and feel across the application.
						</ArticleSection>
						<ArticleSection title="Custom API Handlers with Axios">
							API handling in DreamLogger is streamlined through custom handlers built upon Axios, a
							popular HTTP client for the browser and Node.js. This ensures efficient communication
							between the front-end and back-end, with the ability to manage API requests and responses
							seamlessly.
						</ArticleSection>
						<ArticleSection title="Figma for Design and Prototyping">
							Before translating the design into code, DreamLogger&apos;s user interface is designed and
							prototyped using Figma. Figma allows for collaborative design, ensuring that the final
							product aligns with the initial vision and user experience goals.
						</ArticleSection>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</article>
	);
};

export default DreamLoggerContent;
