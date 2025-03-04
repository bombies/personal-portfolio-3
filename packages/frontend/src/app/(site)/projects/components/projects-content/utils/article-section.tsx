import SubTitle from '@/components/ui/subtitle';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	title: string;
}>;

const ArticleSection: FC<Props> = ({ title, children }) => {
	return (
		<section className="space-y-4 mb-6">
			<SubTitle>{title}</SubTitle>
			{children}
		</section>
	);
};

export default ArticleSection;
