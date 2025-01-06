import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <div className="mt-5 bg-gray-100 pt-2 dark:bg-white/5">
    <div className="m-auto max-w-6xl px-3 pt-5 text-sm text-gray-800 dark:text-white">
      <p className="whitespace-normal text-xl text-gray-600 dark:text-white">
        A list of valuable resources for every Guardian.
      </p>
      <p className="textwhitespace-normal text-gray-600 dark:text-white">
        Destiny 2 is an enourmous game that can be overwhelming for new players.
        <br />
        We aim to create an exhaustive list of all the tools that will help to
        make the most out of the game.
      </p>
    </div>
    <div className="m-auto flex max-w-6xl flex-col px-3 pb-5 pt-5 text-sm text-gray-800 dark:text-white md:flex-row">
      <div>
        © Copyright {new Date().getFullYear()}. All Rights Reserved.
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
