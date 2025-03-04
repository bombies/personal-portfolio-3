import BadgeButton from '@/components/ui/badge-button';
import MainContainer from '@/components/ui/main-container';
import { HomeIcon, MessageCircleIcon } from 'lucide-react';

export default function NotFound() {
	return (
		<MainContainer className="flex-col !max-w-full items-center">
			<h1 className="font-bold text-3xl phone-big:text-7xl text-center">
				<span className="text-primary font-mono border border-border p-2 rounded-md bg-black/10">
					404
				</span>{' '}
				Page Not Found =(
			</h1>
			<div className="flex flex-col phone-big:flex-row gap-4 mt-12">
				<BadgeButton href="/" smoothTransition>
					<HomeIcon size={18} className="mr-1" /> return home
				</BadgeButton>
				<BadgeButton href="/contact" smoothTransition>
					<MessageCircleIcon size={18} className="mr-1" /> contact me
				</BadgeButton>
			</div>
		</MainContainer>
	);
}
