import SubTitle from "../components/sub-title";

export default function AboutMe() {
  return (
    <div className="w-full flex flex-col items-center py-16 bg-slate-100 min-h-96">
      <SubTitle title="ABOUT ME" />
      <div className="my-5 w-2/3">
        <div>강민석</div>
        <div>웹 개발자</div>
        <div>1998.04.17(27)</div>
        <div>제주🍊(조천)</div>
        <div>야구⚾(삼성)</div>
        <div>배구🏐(정관장)</div>
        <div>010-8641-7076</div>
        <div>alstjr8125@naver.com</div>
      </div>
    </div>
  );
}
