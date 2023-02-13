import { SocialIcon } from "react-social-icons";

const Footer = () => (
  <div className="bg-gray-100 pt-2 mt-5">
    <div
      className="flex pb-5 px-3 m-auto pt-5 text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
    >
      <div className="mt-2">
        © Copyright 2022. All Rights Reserved.
        <br />
        Bungie Content © Bungie, Inc. All rights reserved. Destiny, the Destiny
        Logo, Bungie and the Bungie logo are among the trademarks of Bungie,
        Inc.
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
      <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
        <div className="w-12 mx-1">
          <SocialIcon
            url="https://twitter.com/kasn"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div className="w-12 mx-1">
          <SocialIcon
            url="https://github.com/kasn/d2toolbox"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
