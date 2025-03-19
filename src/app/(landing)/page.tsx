import { PlusIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { type Metadata } from "next";
import Link from "next/link";
import { CopyToClipboard } from "./_components/copy-to-clipboard";
import {
  Drizzle,
  LuciaAuth,
  NextjsDark,
  NextjsLight,
  ReactEmail,
  ReactJs,
  ShadcnUi,
  StripeLogo,
  TRPC,
  TailwindCss,
} from "./_components/feature-icons";
import CardSpotlight from "./_components/hover-card";

export const metadata: Metadata = {
  title: "Braun Goodson | Agentic Engineer for AI Solutions",
  description:
    "Braun Goodson delivers cutting-edge AI agents, automation, and chatbots for research, product development, and content creation.",
};

const HomePage = () => {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-300px)] max-w-5xl flex-col items-center justify-center gap-4 py-10 text-center md:py-12">
        <div className="p-4">
          <div className="mb-10 flex items-center justify-center gap-3">
            <NextjsIcon className="h-[52px] w-[52px]" />
            <PlusIcon className="h-8 w-8" />
            <LuciaAuth className="h-14 w-14" />
          </div>
          <h1 className="text-balance bg-gradient-to-tr from-black/70 via-black to-black/60 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-zinc-400/10 dark:via-white/90 dark:to-white/20 sm:text-5xl md:text-6xl lg:text-7xl">
            AI Engineering for Business Optimization
          </h1>
          <p className="mb-10 mt-4 text-balance text-center text-muted-foreground md:text-lg lg:text-xl">
            Braun Goodson specializes in architecting AI agents, automation pipelines, and intelligent chatbots that accelerate research, streamline development, and scale content generation. Purpose-built AI, tailored to drive results.
          </p>
          <div className="mb-10">
            <div className="mx-auto max-w-[430px]">
              <CopyToClipboard text={"Contact: brn@gdsn.fyi"} />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/brngdsn" target="_blank">
                <GitHubLogoIcon className="mr-1 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" asChild>
              <Link href="/contact">Work with Braun</Link>
            </Button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto lg:max-w-screen-lg">
          <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            <a id="capabilities"></a>Capabilities
          </h1>
          <p className="mb-10 text-balance text-center text-muted-foreground md:text-lg lg:text-xl">
            End-to-end AI solutions across research, development, and deployment. Braun’s engineering unlocks efficiency, scale, and innovation through advanced AI systems.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "AI Agents",
                description: "Deploy autonomous agents for data gathering, analysis, and decision-making.",
                logo: NextjsIcon,
              },
              {
                name: "AI Automation",
                description: "Design AI-driven workflows to streamline operations and reduce manual effort.",
                logo: TRPC,
              },
              {
                name: "AI Chatbots",
                description: "Build conversational interfaces that enhance customer experience and engagement.",
                logo: ReactJs,
              },
              {
                name: "Research Pipelines",
                description: "Automate deep research tasks using AI for competitive insights and trend analysis.",
                logo: Drizzle,
              },
              {
                name: "Product Integrations",
                description: "Integrate AI capabilities into SaaS products, applications, and internal tools.",
                logo: StripeLogo,
              },
              {
                name: "Content Generation",
                description: "Leverage AI to generate high-quality content at scale across formats and channels.",
                logo: ReactEmail,
              },
            ].map((feature, i) => (
              <CardSpotlight
                key={i}
                name={feature.name}
                description={feature.description}
                logo={<feature.logo className="h-12 w-12" />}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default HomePage;

function NextjsIcon({ className }: { className?: string }) {
  return (
    <>
      <NextjsLight className={className + " dark:hidden"} />
      <NextjsDark className={className + " hidden dark:block"} />
    </>
  );
}
