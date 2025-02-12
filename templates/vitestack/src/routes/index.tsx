import Page from "@/components/Layout/Page";
import Title from "@/components/Title";
import UseCaseCard from "@/components/UseCaseCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const useCases = [
    {
      title: "Build High-Performance Frontend Apps",
      description:
        "Develop modern and optimized frontend applications using Vite’s fast build system and React’s component-based architecture.",
      icon: "⚡",
    },
    {
      title: "Develop Scalable Web Applications",
      description:
        "Create scalable, maintainable React applications with TanStack's powerful routing and state management solutions.",
      icon: "📈",
    },
    {
      title: "Dynamic and Data-Driven Interfaces",
      description:
        "Leverage TanStack Query for efficient data fetching, caching, and state synchronization in dynamic web applications.",
      icon: "🔄",
    },
    {
      title: "Component-Driven UI Development",
      description:
        "Build and manage reusable, composable UI components to streamline your development workflow.",
      icon: "📦",
    },
    {
      title: "Reliable Testing and Debugging",
      description:
        "Ensure code quality and stability with a pre-configured testing setup, making debugging and maintenance easier.",
      icon: "🧪",
    },
    {
      title: "Optimized Performance for Production",
      description:
        "Utilize Vite’s advanced bundling, code-splitting, and lazy-loading features to deliver highly performant applications.",
      icon: "🚀",
    },
  ];

  return (
    <Page className="flex items-center justify-center min-h-screen">
      <section className="flex flex-col gap-y-5 my-24 lg:my-0">
        <Title />
        <a
          href="https://www.deviniter.site/"
          target="_blank"
          className="rounded-xl px-3.5 py-1.5 lg:px-4 lg:py-2.5 w-fit font-semibold lg:font-bold lg:text-lg border-2 text-pink-dark dark:text-pink lg:hover:text-white border-pink-dark dark:border-pink lg:hover:bg-pink-dark dark:lg:hover:bg-pink transition-all duration-150 ease-linear"
        >
          Learn More
        </a>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const { title, description, icon } = useCase;
            return (
              <UseCaseCard
                key={index}
                title={title}
                description={description}
                icon={icon}
              />
            );
          })}
        </div>
      </section>
    </Page>
  );
}
