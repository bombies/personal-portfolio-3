import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	title: string;
}>;

const ArticleSection: FC<Props> = ({ title, children }) => {
	return (
		<section className="space-y-4 mb-6">
			<h3 className="text-secondary font-semibold text-xl">
				{title}
			</h3>
			{children}
		</section>
	);
};

export default ArticleSection;
