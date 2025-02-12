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
      title: "Lightning-Fast Development",
      description:
        "Leverage Vite’s ultra-fast HMR and build speed to rapidly develop and iterate on your projects.",
      icon: "⚡",
    },
    {
      title: "Scalable React Applications",
      description:
        "Build scalable and maintainable React applications with TanStack's powerful state and data management tools.",
      icon: "📈",
    },
    {
      title: "Reusable UI Components",
      description:
        "Create and maintain a library of reusable components to enhance consistency and productivity.",
      icon: "📦",
    },
    {
      title: "Data-Driven Solutions",
      description:
        "Fetch, cache, and manage data efficiently using TanStack Query, ensuring optimal performance.",
      icon: "🔄",
    },
    {
      title: "Reliable Testing Setup",
      description:
        "Enhance code quality with a pre-configured testing environment tailored for React applications.",
      icon: "🧪",
    },
    {
      title: "Optimized Performance",
      description:
        "Utilize Vite’s modern bundling and code-splitting features to maximize application performance.",
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
