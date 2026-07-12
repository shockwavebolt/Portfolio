import portrait from "../media/P1.JPG";

function About() {
  return (
    <>
      <div
        id="about"
        className="my-24 grid grid-cols-subgrid gap-y-16 md:col-span-3 md:col-start-2 lg:col-span-4 lg:col-start-3"
      >
        <div className="order-1 mx-auto w-60 md:order-0 md:col-span-2 md:col-start-1 md:mx-0 md:w-auto">
          <img
            alt="portrait"
            className="border-t-2 border-solid border-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
            src={portrait}
          />
        </div>

        <div className="order-2 col-span-full flex flex-col gap-8 md:order-0 md:col-span-1 md:col-start-3 lg:col-span-2">
          <div className="flex flex-col gap-3">
            <label className="font-ibm text-accent text-[14px] md:text-[16px] lg:text-[20px]">
              NAME/TITLE
            </label>
            <p className="font-inter text-[14px] md:text-[16px] lg:text-[18px]">
              Claude Ronald Pierre, Product Engineer.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-ibm text-accent text-[14px] md:text-[16px] lg:text-[20px]">
              EDUCATION
            </label>
            <p className="font-inter text-[14px] leading-relaxed md:text-[16px] lg:text-[18px]">
              Attended CUNY Brooklyn College (2019-2023) for Multimedia
              Computing and later studied UI/UX Design and Frontend Engineering
              independently for 3 years.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-ibm text-accent text-[14px] md:text-[16px] lg:text-[20px]">
              STACK
            </label>
            <p className="font-inter text-[14px] leading-relaxed md:text-[16px] lg:text-[18px]">
              React, HTML/CSS, JavaScript, TailwindCSS, Figma.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-ibm text-accent text-[14px] md:text-[16px] lg:text-[20px]">
              STATUS
            </label>
            <p className="font-inter text-[14px] md:text-[16px] lg:text-[18px]">
              Open to work.
            </p>
          </div>
        </div>

        {/* <div className="col-span-full md:col-start-1 md:col-span-2 order-3 md:order-0 flex flex-col gap-3 md:gap-4">
          <label className=" text-[14px]  md:text-[16px] lg:text-[20px] font-ibm text-accent">
            PHILOSOPHY
          </label>
          <p className=" text-[14px] md:text-[16px] lg:text-[16px] font-inter">
            Lorem ipsum dolor sit amet consectetur. Sit facilisi vitae venenatis
            neque nullam consectetur dui. Nulla viverra interdum sapien non
            mattis ipsum mauris et viverra. Varius.
          </p>
        </div> */}
      </div>
    </>
  );
}

export default About;
