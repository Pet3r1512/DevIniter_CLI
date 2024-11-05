import Page from "./components/Layout/Page";
import Title from "./components/Title";
import UseCaseCard from "./components/UseCaseCard";

function App() {
  const useCases = [
    {
      title: "Personal Portfolio",
      description:
        "Showcase your projects, skills, and experience with a fast, modern portfolio site that supports smooth animations and dynamic content.",
      icon: "👨‍💻",
    },
    {
      title: "Landing Pages",
      description:
        "Create high-performance landing pages with fast load times, responsive designs, and interactive elements powered by React.",
      icon: "🚀",
    },
    {
      title: "Documentation Sites",
      description:
        "Build technical documentation, wikis, or knowledge bases with fast navigation and excellent code syntax highlighting.",
      icon: "📚",
    },
    {
      title: "SPA Applications",
      description:
        "Develop single-page applications with client-side routing, state management, and optimized build output.",
      icon: "⚡",
    },
    {
      title: "Interactive Dashboards",
      description:
        "Create data visualization dashboards with real-time updates, charts, and responsive layouts.",
      icon: "📊",
    },
    {
      title: "Prototypes & MVPs",
      description:
        "Quickly build and deploy proof-of-concepts and minimum viable products with Vite's rapid development environment.",
      icon: "🛠️",
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

export default App;
