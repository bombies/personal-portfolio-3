import { FC, PropsWithChildren } from 'react';

import { cn } from '../../lib/utils';

type TitleProps = PropsWithChildren<{
	className?: string;
}>;

const Title: FC<TitleProps> = ({ children, className }) => {
	return (
		<h1 className={cn('font-bold text-3xl laptop:text-7xl', className)}>
			{children}
		</h1>
	);
};

export default Title;
