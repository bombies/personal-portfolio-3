import ProjectPageDetails from '@/app/(site)/projects/[projectName]/components/project-page-details';
import { projectMapping } from '@/app/(site)/projects/data';
import BreadcrumbBuilder from '@/components/ui/breadcrumb-builder';
import MainContainer from '@/components/ui/main-container';
import { AsyncParams } from '@/lib/types';
import { ReactLenis } from 'lenis/react';
import { notFound } from 'next/navigation';
import { FC } from 'react';

type Props = AsyncParams<{
	projectName: string;
}>;

const SpecificProjectPage: FC<Props> = async ({ params }) => {
	const { projectName } = await params;
	const project = projectMapping['/' + projectName];
	if (!project) notFound();

	return (
		<ReactLenis root>
			<MainContainer className="h-fit laptop:h-fit flex-col pt-16 laptop:overflow-auto mb-16">
				<BreadcrumbBuilder
					breadcrumbs={[
						{
							label: 'Home',
							href: '/',
						},
						{
							label: 'Projects',
							href: '/projects',
						},
						{
							label: project.name,
							href: `/projects/${projectName}`,
						},
					]}
				/>
				<ProjectPageDetails project={project} />
			</MainContainer>
		</ReactLenis>
	);
};

export default SpecificProjectPage;
