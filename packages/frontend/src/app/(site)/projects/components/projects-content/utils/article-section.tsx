import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import SubTitle from '@/components/ui/subtitle';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	title: string;
	collapsible?: boolean;
}>;

const ArticleSection: FC<Props> = ({ title, children, collapsible }) => {
	return collapsible ? (
		<Accordion type="single" collapsible>
			<AccordionItem value="article-title">
				<AccordionTrigger>
					<SubTitle>{title}</SubTitle>
				</AccordionTrigger>
				<AccordionContent>
					<section>
						<p className="text-lg">{children}</p>
					</section>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	) : (
		<section className="space-y-4 mb-6">
			<SubTitle>{title}</SubTitle>
			{children}
		</section>
	);
};

export default ArticleSection;
