import { brain } from "../assets";
import { github } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex justify-between items-center gap-2">
          <img
            src={brain}
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="font-code font-bold text-2xl">QuickSum</h1>
        </div>

        <button
          type="button"
          onClick={() => window.open("https://github.com/maxdevocht")}
        >
          <img src={github} alt="github" width={40} height={40} />
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with QuickSum, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
