import * as React from "react";export default function InfoSection({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed,
  bgColor,
}) {
  return (
    <section className={`flex z-0 flex-col justify-center w-full ${bgColor} py-5`}>
      <div
        className={`flex flex-wrap items-center justify-center gap-20 w-full ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Content Section */}
        <div className="flex flex-col justify-center w-full max-w-[568px] min-w-[240px] text-center md:text-left">
          <h2 className="text-5xl font-medium tracking-tighter leading-none text-stone-950 max-md:text-4xl">
            {title}
          </h2>
          <div className="mx-7 sm:mx-1 text-justify mt-10 sm:text-2xl leading-9 text-neutral-950">
            <div className="pb-5 border-b border-solid border-b-zinc-300">
              {description}
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex flex-col justify-center items-center w-full max-w-[544px] min-w-[240px] mx-5 md:mx-10 ">
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="object-cover rounded-3xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}