import ArticleSection from '@/app/(site)/projects/components/projects-content/utils/article-section';
import LineSpacer from '@/app/(site)/projects/components/projects-content/utils/line-spacer';
import { FC } from 'react';

const MDGPTContent: FC = () => {
	return (
		<article>
			<ArticleSection title="What MD-GPT Does">
				At its core, MD-GPT is a practical tool for medical professionals. It
				streamlines patient record management and consultation history, making it
				easier for doctors to keep their data organized. Its AI-powered chat
				interface lets doctors input symptoms and patient histories, and then
				suggests potential diagnoses by analyzing the conversation. Rather than
				replacing the human element, MD-GPT is designed to enhance the diagnostic
				process by highlighting important details and offering useful insights.
			</ArticleSection>
			<ArticleSection title="The Tech Behind It">
				<ul className="list-disc marker:text-primary px-6">
					<li>
						<b className="text-primary">Patient & Consultation Management:</b>{' '}
						A straightforward system that helps doctors efficiently create,
						update, and organize patient records.
					</li>
					<li>
						<b className="text-primary">AI-Powered Chat Interface:</b> When
						doctors engage with the interface, the AI—trained on a rich
						dataset of doctor-patient interactions—provides additional
						insights to support the diagnostic process.
					</li>
					<li>
						<b className="text-primary">Natural Language Processing:</b> Using
						OpenAI’s Python library, MD-GPT extracts and analyzes critical
						information from conversations, ensuring that key details are
						captured.
					</li>
					<li>
						<b className="text-primary">Secure Data Storage:</b> Patient
						records, consultation histories, and chat logs are securely stored
						in a scalable MongoDB database.
					</li>
					<li>
						<b className="text-primary">High-Speed API:</b> FastAPI powers the
						backend, enabling real-time communication between the frontend and
						the AI model.
					</li>
					<li>
						<b className="text-primary">RAG via Kernel-Memory:</b> The latest
						update integrates Retrieval Augmented Generation (RAG) through
						Kernel-Memory, which allows the system to merge historical
						knowledge with real-time data, resulting in more contextually
						relevant insights.
					</li>
				</ul>
			</ArticleSection>
			<ArticleSection title="Why It Matters">
				Working on MD-GPT has been an incredible journey into the potential of AI
				in healthcare. It&apos;s not about replacing doctors but about empowering
				them with tools that enhance their decision-making process. From our
				hackathon beginnings to its evolution as a project in our AI course,
				MD-GPT reflects a blend of rapid prototyping, academic exploration, and
				practical application.
				<LineSpacer />
				As I continue to work on MD-GPT, I remain excited about exploring new ways
				to support healthcare professionals with innovative technology. If
				you&apos;re interested in the crossroads of AI and healthcare, I&apos;d
				love to share more about what we&apos;ve learned along the way.
			</ArticleSection>
		</article>
	);
};

export default MDGPTContent;
