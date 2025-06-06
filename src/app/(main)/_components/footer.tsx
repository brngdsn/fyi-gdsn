import { ThemeToggle } from "@/components/theme-toggle";
import { CodeIcon } from "@radix-ui/react-icons";

const githubUrl = "https://github.com/iamtouha/next-lucia-auth";
const twitterUrl = "https://twitter.com/brngdsn";

export const Footer = () => {
  return (
    <footer className="mt-6 px-4 py-6">
      <div className="container flex items-center p-0">
        <CodeIcon className="mr-2 h-6 w-6" />
        <p className="text-sm">
          Built by{" "}
          <a className="underline underline-offset-4" href={twitterUrl}>
            brngdsn
          </a>
          . Get the scaffold from{" "}
          <a className="underline underline-offset-4" href={githubUrl}>
            GitHub
          </a>
          .
        </p>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};
