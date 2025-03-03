import LineSpacer from '@/app/(site)/projects/components/projects-content/utils/line-spacer';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { FC } from 'react';

const GreensPubContent: FC = () => {
	return (
		<article>
			<Accordion type="single" collapsible>
				<AccordionItem value="about-proj">
					<AccordionTrigger className="text-3xl text-primary font-bold">
						About the Project
					</AccordionTrigger>
					<AccordionContent className="text-lg">
						This project written in TypeScript is a comprehensive company
						dashboard designed to streamline inventory management and
						facilitate data-driven decision-making. It offers a range of
						features, including inventory management, insightful analysis,
						invoice generation, and user management.
						<LineSpacer />
						The core functionality of the dashboard revolves around inventory
						management. Users can easily create new inventories, providing
						essential details such as product names, quantities, and other
						relevant information. The system then utilizes historical data to
						generate insights specific to each inventory. These insights are
						derived from analyzing past stock data and provide valuable
						information to make intelligent decisions about future stock
						choices. This enables the company to optimize its inventory,
						minimize stockouts, and improve overall operational efficiency.
						<LineSpacer />
						The dashboard also manages inventory for specific locations. These
						locations depend on the general inventories for their items and
						even integrate an inventory requests system for employees to move
						items from one area to another in a tracked and organized manner.
						<LineSpacer />
						The dashboard also incorporates an invoice generation module,
						allowing the company to effortlessly bill customers. The invoice
						formatting is highly configurable, ensuring flexibility to
						accommodate specific business requirements. Users can define the
						layout, include custom fields, and tailor the appearance of the
						invoice to align with their branding. This simplifies the
						invoicing process, enabling swift and accurate billing for
						improved financial management.
						<LineSpacer />
						Additionally, the project includes robust user management
						capabilities. Administrators can easily add and remove users from
						the system, granting or revoking access as needed. Each
						user&apos;s permissions within the dashboard are highly
						configurable, allowing fine-grained control over their actions and
						access levels. The system employs binary arithmetic to handle
						permissions, ensuring both security and computational efficiency.
						This approach provides a scalable and efficient way to manage user
						access rights without compromising data integrity or system
						performance.
						<LineSpacer />
						Overall, this project offers a comprehensive company dashboard
						with powerful inventory management features. By leveraging
						historical data insights, flexible invoice generation, and
						efficient user management, the dashboard empowers businesses to
						make informed decisions, optimize stock management, and streamline
						operations effectively.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</article>
	);
};

export default GreensPubContent;
