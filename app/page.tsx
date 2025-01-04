import AboutMe from "./(sub)/about-me";
import Archiving from "./(sub)/archiving";
import Projects from "./(sub)/projects";
import Skills from "./(sub)/skills";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-slate-200 min-h-96 flex justify-center items-center flex-col gap-4">
        <div className="text-3xl">개발자 삼다수의 포트폴리오</div>
        <div className="text-3xl">강민석</div>
        <div className="w-6 h-1 bg-black m-3"></div>
        <div className="text-base">
          상상을 현실로 바꾸는 개발자가 되고싶은 삼다수입니다.
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
    </div>
  );
}
