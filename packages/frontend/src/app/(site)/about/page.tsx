import { Technoloy, technologyAttributes } from '@/app/(site)/projects/types';
import { Badge } from '@/components/ui/badge';
import BreadcrumbBuilder from '@/components/ui/breadcrumb-builder';
import Image from '@/components/ui/image';
import MainContainer from '@/components/ui/main-container';
import { Separator } from '@/components/ui/separator';
import Title from '@/components/ui/title';
import { FC } from 'react';

const AboutMePage: FC = () => {
	return (
		<MainContainer className="flex-col pt-12 tablet:pt-24 laptop:pt-24">
			<BreadcrumbBuilder
				breadcrumbs={[
					{
						label: 'Home',
						href: '/',
					},
					{
						label: 'About Me',
						href: '/about',
					},
				]}
			/>
			<div className="flex flex-col-reverse tablet:flex-row tablet:justify-between gap-6">
				<div className="space-y-6">
					<Title>
						About <span className="text-primary">Me</span>
					</Title>
					<Separator />
					<p>
						I&apos;m Ajani Green—a passionate React developer with 5 years of programming experience from
						Jamaica 🇯🇲, and a strong advocate for innovative cloud infrastructure. My expertise lies in
						building dynamic user interfaces with React, complemented by hands-on experience in
						architecting, deploying, and maintaining cloud-based applications on AWS. Whether it&apos;s
						crafting seamless front-end experiences or designing robust backend systems, I&apos;m dedicated
						to continuous learning and pushing the boundaries of what&apos;s possible in web development and
						cloud computing.
					</p>

					{/* Give a list of all technologies */}
					<h3 className="font-bold text-xl text-primary">Languages, Frameworks & Tools</h3>
					<div className="flex gap-2 flex-wrap">
						{Object.values(Technoloy).map((tech, index) => {
							if (typeof tech === 'string') return undefined;

							const attribs = technologyAttributes[tech];
							return (
								<Badge key={`tech-${index}`} variant="outline" className="text-sm gap-3 font-mono">
									<attribs.icon size={18} /> {attribs.label}
								</Badge>
							);
						})}
					</div>
				</div>

				<Image
					src="/me.jpeg"
					alt="Me :)"
					classNames={{
						global: 'rounded-lg shrink-0 w-full place-self-center tablet:size-96 aspect-9/10 border border-border',
					}}
					fill
					objectFit="cover"
				/>
			</div>
		</MainContainer>
	);
};

export default AboutMePage;
