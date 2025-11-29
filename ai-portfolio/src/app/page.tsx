import AINetworkVisual from "@/components/visuals/AINetworkVisual";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <AINetworkVisual />
      <main className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Sebastian Kowalik
          </h1>
          <p className="mt-4 text-lg text-gray-300 md:text-xl">
            AI Portfolio
          </p>
        </div>
      </main>
    </div>
  );
}
