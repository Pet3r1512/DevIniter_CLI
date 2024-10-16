import { cn } from "@/lib/utils";
import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Page({
  children,
  className,
  pageName,
}: {
  children: ReactNode;
  className?: string;
  pageName?: string;
}) {
  return (
    <>
      <Head>
        <title>NextJS Starter Template</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        ></meta>
        <link rel="icon" href="/ico/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section
          className={cn(
            "flex flex-col lg:min-h-screen max-w-[1440px] light:bg-white bg-black-main"
          )}
        >
          <div
            className={cn(
              "mx-auto w-full max-w-7xl px-6 min-h-screen",
              className
            )}
          >
            {children}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
