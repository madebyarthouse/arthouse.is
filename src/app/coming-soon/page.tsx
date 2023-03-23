export default function ComingSoonPage() {
  return (
    <>
      <span className="transform-gpu mix-blend-color-burn bg-red-400/70 rounded-[100px] gate-open-top" />
      <span className="transform-gpu mix-blend-color-burn bg-green-400/70 rounded-[100px] gate-open-bottom" />
      <span className="transform-gpu mix-blend-color-burn bg-purple-400/70 rounded-[100px] gate-open-right" />
      <span className="transform-gpu mix-blend-color-burn bg-amber-400/70 rounded-[100px] gate-open-left" />
      <div className="bg-white/90 max-w-[95%] mx-auto relative z-20 p-5 lg:p-20 rounded-lg text-center text-gray-800/80">
        <span className="transform-gpu shadow-lg mix-blend-darken border-entry-top bg-green-200 shadow-green-200" />
        <span className=" shadow-lg mix-blend-darken border-entry-bottom bg-red-200 shadow-red-200" />
        <span className="transform-gpu shadow-lg mix-blend-darken border-entry-right bg-amber-200 shadow-amber-200" />
        <span className="transform-gpu shadow-lg mix-blend-darken border-entry-left bg-purple-200 shadow-purple-200" />
        <h1 className="font-semibold font-brand text-7xl md:text-9xl text-center leading-tight">
          Arthouse
        </h1>
        <h3 className="!leading-7 text-xl md:text-2xl text-center font-regular font-body">
          A digital product studio <br /> based in Vienna, Austria.
        </h3>

        <hr className="border-gray-800/80 border-t w-1/2 mx-auto my-5" />

        <a
          className="font-semibold active:scale-95 relative text-3xl inline-block group"
          href="mailto:christian.cito@arthouse.is?subject=Work with us"
        >
          <span>Work with us!</span>
          <span className="absolute left-0 bottom-0 scale-x-0 will-change-transform transform-gpu origin-bottom-left group-hover:scale-x-100 transition-all duration-300 ease-in-out border-b-2 border-gray-800/80 w-full" />
        </a>
      </div>
    </>
  );
}
