export default function Title() {
  return (
    <div className="font-bold flex flex-col gap-y-5">
      <p className="text-lg md:text-xl lg:text-2xl">STARTER TEMPLATE</p>
      <p className="text-2xl md:text-3xl lg:text-5xl bg-gradient-to-r dark:from-yellow from-yellow/70 to-green dark:to-90% inline-block text-transparent bg-clip-text">
        VITE - TANSTACK
      </p>
      <p className="font-normal text-sm md:text-base">
        A blazing-fast starter template powered by{" "}
        <span className="text-yellow font-bold">Vite</span>,{" "}
        <span className="text-blue font-bold">React</span>, and{" "}
        <span className="text-green font-bold">TanStack</span>. Designed for
        modern web development, it comes with optimized configurations, best
        practices, and essential tools to kickstart your next project with ease.
        🚀
      </p>
    </div>
  );
}
