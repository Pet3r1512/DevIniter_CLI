import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import Header from "./Header";

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
    <main className="body bg-cover bg-center h-full">
      <Header />
      <section
        className={cn(
          "flex flex-col mx-auto max-w-[1440px] min-h-screen",
          pageName,
        )}
      >
        <div
          className={cn(
            "mx-auto w-full max-w-7xl px-6 min-h-screen",
            className,
          )}
        >
          {children}
        </div>
      </section>
    </main>
  );
}
