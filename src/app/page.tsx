export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#030014] text-white">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent">
        IMANOSTRADAMUS
      </h1>
      <p className="mt-4 text-white/60 text-center">
        Full-stack systems. Voice. Apps. Commercials.
      </p>
      <div className="mt-12 flex flex-col gap-4 w-full max-w-xs">
        <button className="px-6 py-4 rounded-2xl bg-white/5 border border-purple-500/30 hover:border-purple-400 transition">
          Websites + AI Voice
        </button>
        <button className="px-6 py-4 rounded-2xl bg-white/5 border border-purple-500/30 hover:border-purple-400 transition">
          Apps that Save Money
        </button>
        <button className="px-6 py-4 rounded-2xl bg-white/5 border border-purple-500/30 hover:border-purple-400 transition">
          Commercial Ads
        </button>
      </div>
    </main>
  );
}
