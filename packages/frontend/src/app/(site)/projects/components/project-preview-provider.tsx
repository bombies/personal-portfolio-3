'use client';

import { Project } from '@/app/(site)/projects/types';
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useMemo, useState } from 'react';

type ProjectPreviewData = {
	focusedProject?: Project;
	setFocusedProject?: Dispatch<SetStateAction<Project | undefined>>;
};

const ProjectPreviewContext = createContext<ProjectPreviewData | undefined>(undefined);

export const useProjectPreviewData = () => {
	const context = useContext(ProjectPreviewContext);
	if (!context) throw new Error('useProjectPreviewData must be used within a ProjectPreviewProvider');

	return context;
};

const ProjectPreviewProvider: FC<PropsWithChildren> = ({ children }) => {
	const [focusedProject, setFocusedProject] = useState<Project | undefined>(undefined);

	const data = useMemo(
		() => ({
			focusedProject,
			setFocusedProject,
		}),
		[focusedProject],
	);

	return <ProjectPreviewContext.Provider value={data}>{children}</ProjectPreviewContext.Provider>;
};

export default ProjectPreviewProvider;
