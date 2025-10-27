import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type Props = PropsWithChildren<{
	className?: string;
}>;

const SubTitle: FC<Props> = ({ className, children }) => {
	return (
		<h3 className={cn('text-secondary font-semibold text-2xl', className)}>
			{children}
		</h3>
	);
};

export default SubTitle;
