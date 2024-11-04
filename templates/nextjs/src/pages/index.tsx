import Page from "@/components/Layout/Page";
import Title from "@/components/Layout/Title";
import UseCaseCard from "@/components/UseCaseCard";
import Link from "next/link";

export default function Home() {
  const useCases = [
    {
      title: "E-commerce Solutions",
      description:
        "Build scalable online stores with integrated payment processing, inventory management, and shopping cart functionality.",
      icon: "🛍️",
    },
    {
      title: "SaaS Applications",
      description:
        "Create subscription-based services with user authentication, dashboard interfaces, and billing management.",
      icon: "⚙️",
    },
    {
      title: "Marketing Websites",
      description:
        "Design high-performance landing pages and marketing sites with SEO optimization and analytics integration.",
      icon: "📈",
    },
    {
      title: "Admin Dashboards",
      description:
        "Develop comprehensive admin panels with data visualization, user management, and real-time analytics.",
      icon: "📊",
    },
    {
      title: "Content Platforms",
      description:
        "Build content management systems, blogs, and media platforms with dynamic content loading.",
      icon: "📝",
    },
    {
      title: "API-First Projects",
      description:
        "Create robust backend services with API endpoints, database integration, and serverless functions.",
      icon: "🔌",
    },
  ];
  return (
    <Page className="flex items-center justify-center min-h-screen">
      <section className="flex flex-col gap-y-5 my-24 lg:my-0">
        <Title />
        <Link
          href="https://www.deviniter.site/"
          target="_blank"
          className="rounded-xl px-3.5 py-1.5 lg:px-4 lg:py-2.5 w-fit font-semibold lg:font-bold lg:text-lg border-2 text-primary lg:hover:text-white border-primary lg:hover:bg-primary transition-all duration-150 ease-linear"
        >
          Learn More
        </Link>
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
