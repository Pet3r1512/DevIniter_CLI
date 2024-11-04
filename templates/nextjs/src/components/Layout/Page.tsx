import { cn } from "@/lib/utils";
import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header/Header";

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
      <main className="bg-cover bg-center h-full">
        <Header />
        <section
          className={cn(
            "flex flex-col mx-auto max-w-[1440px] min-h-screen",
            pageName
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
      </main>
    </>
  );
}
