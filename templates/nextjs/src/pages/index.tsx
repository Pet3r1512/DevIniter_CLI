import Page from "@/components/Layout/Page";
import Title from "@/components/Layout/Title";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Page className="flex items-center justify-center">
      <section className="flex flex-col gap-y-5">
        <Title />
        <p className="lg:text-2xl text-lg md:text-xl flex items-center gap-x-2.5">
          🚀 Powered by{" "}
          <Link href={"https://deviniter.vercel.app/"} target="_blank">
            <Image
              src="/logos/FullLogo.png"
              alt="DevIniter Logo"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="h-10 w-auto"
            />
          </Link>
        </p>
        <div className="flex flex-col gap-y-2.5">
          <p className="text-xl lg:text-3xl font-bold">Tech Stacks:</p>
          <ul className="list-disc">
            <li>
              <Link
                href={"https://nextjs.org/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                NextJS (Page Router)
              </Link>{" "}
              - v15
            </li>
            <li>
              <Link
                href={"https://www.typescriptlang.org/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                TypeScript
              </Link>{" "}
              - v5
            </li>
            <li>
              <Link
                href={"https://react.dev/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                React
              </Link>{" "}
              - v19
            </li>
            <li>
              <Link
                href={"https://tailwindcss.com/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                TailwindCSS
              </Link>{" "}
              - v3
            </li>
            <li>
              <Link
                href={"https://ui.shadcn.com/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                Shadcn/ui
              </Link>
            </li>
            <li>
              <Link
                href={"https://lucide.dev/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                Lucide React Icon
              </Link>{" "}
              - v4
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2.5">
          <p className="text-xl lg:text-3xl font-bold">Other Techs & Tools:</p>
          <ul className="list-disc">
            <li>
              <Link
                href={"https://www.prisma.io/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                Prisma
              </Link>
            </li>
            <li>
              <Link
                href={"https://eslint.org/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                ESLint
              </Link>
            </li>
            <li>
              <Link
                href={"https://postcss.org/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                PostCSS
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Page>
  );
}
