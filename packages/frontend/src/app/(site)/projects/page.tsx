import { FC, useMemo } from 'react';

import MainContainer from '../../../components/ui/main-container';
import { Separator } from '../../../components/ui/separator';
import Title from '../../../components/ui/title';
import ProjectImagePreview from './components/project-image-preview';
import ProjectItem from './components/project-item';
import ProjectPreviewProvider from './components/project-preview-provider';
import { projects } from './data';

const ProjectsPage: FC = () => {
	const projectElements = useMemo(
		() =>
			projects.map((project, idx) => (
				<ProjectItem
					key={`project_item#${project.name}#${idx}`}
					project={project}
					ordinal={idx}
				/>
			)),
		[],
	);

	return (
		<ProjectPreviewProvider>
			<MainContainer className="laptop:max-w-[75rem]">
				<div className="flex flex-col w-full laptop:w-1/2 gap-y-6">
					<div className="flex justify-between items-end shrink-0">
						<Title>
							My{' '}
							<span className="text-primary">
								Projects
							</span>
						</Title>
						<div className="bg-primary rounded-full size-8 flex justify-center items-center">
							<span className="font-mono">
								{
									projectElements.length
								}
							</span>
						</div>
					</div>
					<Separator />
					<div className="flex flex-col overflow-auto">
						{projectElements}
					</div>
				</div>
				<ProjectImagePreview />
			</MainContainer>
		</ProjectPreviewProvider>
	);
};

export default ProjectsPage;
