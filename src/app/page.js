import Image from "next/image";

export default function Home() {
  return (
    <div className= "container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)">
      <div>
        <h1 className="text-4xl font-bold tracking-light">Software Engineer and <span className="block" style={{ color: "purple" }}>AI Solutionist</span></h1>
        <p className="mt-4 text-xl text-gray-300" style={{ lineHeight: "1.8rem" }}>I am a recent B.Sc. Engineering graduate from the University of Moratuwa, with a strong foundation in Machine Learning, Data Science, Software Development, and DevOps. My journey, combined with hands-on projects, has allowed me to design and implement AI-driven solutions that bridge the gap between research and real-world applications.</p>
        <div className="flex mt-10 gap-4">
          <button className="px-8 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500">About Me</button>
          <button className="px-8 py-3 rounded-lg border border-gray-600 font-medium hover:border-purple-500">Contact Me Me</button>
        </div>
      </div>
      
    </div>
  );
}
