import { FC } from 'react';

import BreadcrumbBuilder from '../../../components/ui/breadcrumb-builder';
import MainContainer from '../../../components/ui/main-container';
import { Separator } from '../../../components/ui/separator';
import Title from '../../../components/ui/title';
import ProjectImagePreview from './components/project-image-preview';
import ProjectListing from './components/project-listing';
import ProjectPreviewProvider from './components/project-preview-provider';
import { projects } from './data';

const ProjectsPage: FC = () => {
	return (
		<ProjectPreviewProvider>
			<MainContainer className="laptop:max-w-[75rem]">
				<div className="flex flex-col w-full laptop:w-1/2 gap-y-6">
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
						]}
					/>
					<div className="flex justify-between items-center shrink-0">
						<Title>
							My{' '}
							<span className="text-primary">
								Projects
							</span>
						</Title>
						<div className="bg-primary rounded-full size-8 flex justify-center items-center">
							<span className="font-mono">
								{
									projects.length
								}
							</span>
						</div>
					</div>
					<Separator />
					<ProjectListing />
				</div>
				<ProjectImagePreview />
			</MainContainer>
		</ProjectPreviewProvider>
	);
};

export default ProjectsPage;
