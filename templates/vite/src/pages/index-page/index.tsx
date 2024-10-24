import ThemeToggle from "../../components/ThemeToggle";

function IndexPage() {
  return (
    <body className="relative flex items-center justify-center h-screen">
      <ThemeToggle className="absolute lg:top-10 lg:left-10 top-5 left-5" />
      <section className="flex flex-col px-5 lg:px-0 gap-y-5">
        <p className="lg:text-6xl font-bold text-4xl md:text-5xl bg-gradient-to-br from-primary to-secondary inline-block text-transparent bg-clip-text !leading-normal">
          <span className="dark:text-white text-black">This is</span> Vite +
          React + TypeScript{" "}
          <span className="dark:text-white text-black">Starter Template</span>
        </p>
        <p className="lg:text-2xl text-lg md:text-xl flex items-center gap-x-2.5">
          🔨 Built by{" "}
          <a
            href={"https://github.com/samhwang"}
            target="_blank"
            className="underline font-bold"
          >
            SamHwang
          </a>
        </p>
        <p className="lg:text-2xl text-lg md:text-xl flex items-center gap-x-2.5">
          🚀 Published by{" "}
          <a href={"https://deviniter.vercel.app/"} target="_blank">
            <img
              src="/FullLogo.png"
              alt="DevIniter Logo"
              className="h-10 w-auto"
            />
          </a>
        </p>
        <div className="flex flex-col gap-y-2.5 px-5 lg:px-0">
          <p className="text-xl lg:text-3xl font-bold">Tech Stacks:</p>
          <ul className="list-disc">
            <li>
              <a
                href={"https://vite.dev/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                Vite
              </a>{" "}
              - v5
            </li>
            <li>
              <a
                href={"https://www.typescriptlang.org/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                TypeScript
              </a>{" "}
              - v5
            </li>
            <li>
              <a
                href={"https://react.dev/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                React
              </a>{" "}
              - v18
            </li>
            <li>
              <a
                href={"https://tailwindcss.com/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                TailwindCSS
              </a>{" "}
              - v3
            </li>
            <li>
              <a
                href={"https://tanstack.com/router/latest"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                TanStack Router
              </a>
            </li>
            <li>
              <a
                href={"https://lucide.dev/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                Lucide React Icon
              </a>{" "}
              - v4
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2.5 px-5 lg:px-0">
          <p className="text-xl lg:text-3xl font-bold">Other Techs & Tools:</p>
          <ul className="list-disc">
            <li>
              <a
                href={"https://vitest.dev/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                Vitest
              </a>
            </li>

            <li>
              <a
                href={"https://postcss.org/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                PostCSS
              </a>
            </li>
            <li>
              <a
                href={"https://eslint.org/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                ESLint
              </a>
            </li>
            <li>
              <a
                href={"https://www.react-hook-form.com/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                React Hook Form
              </a>
            </li>
            <li>
              <a
                href={"https://biomejs.dev/"}
                target="_blank"
                className="text-primary font-semibold lg:hover:text-secondary"
              >
                Biome
              </a>
            </li>
          </ul>
        </div>
      </section>
    </body>
  );
}

export default IndexPage;
