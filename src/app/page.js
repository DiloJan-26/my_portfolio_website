import ProjectSection from './components/projectsection';

export default function Home() {
  return (
    <div className= "container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)">
      <div className="relative">
        <div className="opacity-14">
          <div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-purple-700/50 rounded-full blur-3xl"></div>
          <div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-purple-500/50 rounded-full blur-2xl"></div>
          <div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-purple-400/50 rounded-full blur-xl"></div>
        </div>
        <h1 className="text-4xl font-bold tracking-light">Software Engineer and <span className="block" style={{ color: "blueviolet" }}>AI Solutionist</span></h1>
        <p className="mt-4 text-xl text-gray-300" style={{ lineHeight: "1.8rem" }}>I am a recent B.Sc. Engineering graduate from the University of Moratuwa, with a strong foundation in Machine Learning, Data Science, Software Development, and DevOps. My journey, combined with hands-on projects, has allowed me to design and implement AI-driven solutions that bridge the gap between research and real-world applications.</p>
        <div className="flex mt-10 gap-4">
          <button className="px-8 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500">About Me</button>
          <button className="px-8 py-3 rounded-lg border border-gray-600 font-medium hover:border-purple-500">Contact Me</button>
        </div>
      </div>
      <ProjectSection />
    </div>
  );
}
