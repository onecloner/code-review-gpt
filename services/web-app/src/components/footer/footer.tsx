import Image from "next/image";

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center text-xl">
      Join the community
      <div className="flex flex-row justify-evenly py-[10px] space-x-4">
          <a href="https://github.com/mattzcarey/code-review-gpt">
            <Image src="/githubLogo.svg" alt={"github logo"} width={40} height={40} />
          </a>
          <a href="https://twitter.com/intent/follow?screen_name=oriontools.ai">
            <Image src="/twitterLogo.svg" alt={"twitter logo"} width={40} height={40} />
          </a>
          <a href="https://join.slack.com/t/orion-tools/shared_invite/zt-20x79nfgm-UGIHK1uWGQ59JQTpODYDwg">
            <Image src="/slackLogo.png" alt={"slack logo"} width={40} height={40} />
          </a>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';
export default Footer;
