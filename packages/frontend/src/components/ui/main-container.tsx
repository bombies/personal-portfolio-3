import { FC, PropsWithChildren } from 'react';

import { cn } from '../../lib/utils';

type Props = {
	className?: string;
};

const MainContainer: FC<PropsWithChildren<Props>> = ({
	children,
	className,
}) => {
	return (
		<main
			className={cn(
				'w-full laptop:max-w-[75rem] h-[calc(100vh-5.5rem)] laptop:h-[calc(100vh-12rem)] flex gap-6 px-8 laptop:px-16 pt-[25vh] laptop:pt-64 overflow-auto laptop:overflow-hidden',
				className,
			)}
		>
			{children}
		</main>
	);
};

export default MainContainer;
