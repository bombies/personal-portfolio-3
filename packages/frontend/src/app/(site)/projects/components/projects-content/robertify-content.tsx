import { FC } from 'react';

const RobertifyContent: FC = () => {
	return (
		<article>
			<p className="text-lg">
				Robertify is a music bot written completely in
				Java and Kotlin using JDA. The name
				&quot;Robertify&quot; originated from the simple
				fact that a friend of mine, named Robert, wanted
				a music bot. So I made one for him. Eventually,
				Robertify became a bigger project to me and I
				have been putting in most of my efforts into it
				ever since.
				<br />
				<br />
				Robertify has gone through several versions,
				each of which bringing a major change. Version 1
				involved just the implementation of the
				bare-boned music playing capabilities, wheras
				the upcoming version 6 is a rewrite from Java to
				Kotlin with features such as a web dashboard,
				statistics tracking, data visualization and more
				modern features.
				<br />
				<br />
				All in all, Robertify is the project that has
				taught me the most about the software
				development industry, especially with respect to
				scale. Robertify served around 800,000 people
				worldwide through a popular platform known as
				Discord. I have learn through mutliple trial and
				error instances to manage such a user-base.
				<br />
				<br />I could go on and on about the many
				lessons I&apos;ve learnt from building this
				application but I think that&apos;s better fit
				for a blog post. Instead, you can enjoy this
				list of all the technologies used.
			</p>
		</article>
	);
};

export default RobertifyContent;
