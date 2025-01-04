import SubTitle from "../components/sub-title";

export default function Skills() {
  return (
    <div className="w-full flex flex-col items-center py-16 bg-slate-200 min-h-96">
      <SubTitle title="Skills" />
      <div className="my-5 w-2/3">
        <div>Frontend</div>
        <div>Next.js(React)</div>
        <div>Sass</div>
        <div>Tailwind</div>
        <div>/</div>
        <div>Backend</div>
        <div>Express</div>
        <div>/</div>
        <div>EevOps</div>
        <div>Vercel</div>
        <div>AWS</div>
        <div>/</div>
        <div>Database</div>
        <div>SQLite</div>
        <div>MySQL</div>
      </div>
    </div>
  );
}
