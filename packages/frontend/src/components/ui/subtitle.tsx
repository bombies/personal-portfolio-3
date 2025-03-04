import { cn } from '@/lib/utils';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
	className?: string;
}>;

const SubTitle: FC<Props> = ({ className, children }) => {
	return (
		<h3 className={cn('text-secondary font-semibold text-xl', className)}>
			{children}
		</h3>
	);
};

export default SubTitle;
