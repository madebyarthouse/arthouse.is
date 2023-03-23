export default function ComingSoonPage() {
  return (
    <>
      <span className="mix-blend-color-burn bg-red-400/70 rounded-[100px] gate-open-top" />
      <span className="mix-blend-color-burn bg-green-400/70 rounded-[100px] gate-open-bottom" />
      <span className="mix-blend-color-burn bg-purple-400/70 rounded-[100px] gate-open-right" />
      <span className="mix-blend-color-burn bg-amber-400/70 rounded-[100px] gate-open-left" />
      <div className="bg-white/90 max-w-[95%] mx-auto relative z-20 p-20 rounded-lg">
        <span className="shadow-lg mix-blend-darken border-entry-top bg-red-200 shadow-red-200" />
        <span className=" shadow-lg mix-blend-darken border-entry-bottom bg-purple-200 shadow-purple-200" />
        <span className="shadow-lg mix-blend-darken border-entry-right bg-green-200 shadow-green-200" />
        <span className="shadow-lg mix-blend-darken border-entry-left bg-amber-200 shadow-amber-200" />
        <h1 className="text-gray-800/80 font-semibold font-brand text-7xl md:text-9xl text-center leading-tight">
          Arthouse
        </h1>
        <h3 className="text-gray-800/80 !leading-7 text-xl md:text-2xl text-center font-regular font-body">
          A digital product studio <br /> based in Vienna.
        </h3>
      </div>
    </>
  );
}
