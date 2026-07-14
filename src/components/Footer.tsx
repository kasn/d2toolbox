import { SocialIcon } from "react-social-icons";

const Footer = () => (
	<div className="dark:border-t-white/7.5 mt-16 border-t bg-gray-50 dark:bg-white/5">
		<div className="mx-auto max-w-screen-2xl px-6 pt-8 lg:px-12">
			<p className="font-display text-lg font-semibold text-zinc-800 dark:text-white">
				A list of valuable resources for every Guardian.
			</p>
			<p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
				Destiny 2 is an enormous game that can be overwhelming for new players.
				We aim to create an exhaustive list of all the tools that will help to
				make the most out of the game.
			</p>
		</div>
		<div className="mx-auto flex max-w-screen-2xl flex-col px-6 pb-8 pt-8 text-xs leading-relaxed text-zinc-500 lg:px-12 dark:text-zinc-500 md:flex-row">
			<div>
				© Copyright {new Date().getFullYear()}. All Rights Reserved.
				<br />
				Not affiliated with Bungie, Inc. or Sony Interactive Entertainment (SIE)
				<br />
				Bungie Content © Bungie, Inc. All rights reserved. Destiny, the Destiny
				Logo, Bungie and the Bungie logo are among the trademarks of Bungie,
				Inc.
				<br />
				Destiny 2 is a registered trademark of Bungie. Trademarks are the
				property of their respective owners. Game materials copyright Bungie.
				<br />
				Destiny Icons provided by{" "}
				<a
					href="https://github.com/justrealmilk/destiny-icons"
					target="_blank"
					rel="noopener noreferrer"
				>
					justrealmilk/destiny-icons
				</a>
			</div>
			<div className="mt-2 flex flex-row md:flex-auto md:flex-row-reverse">
				<div className="mx-1 w-12">
					<SocialIcon
						url="https://bsky.app/profile/kasn.dev"
						target="_blank"
						rel="noopener noreferrer"
					/>
				</div>
				<div className="mx-1 w-12">
					<SocialIcon
						url="https://github.com/kasn/d2toolbox"
						target="_blank"
						rel="noopener noreferrer"
						className="fill:white/5"
					/>
				</div>
				<div className="mx-1 w-12">
					<SocialIcon
						url="https://kasn.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="fill:white/5"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
