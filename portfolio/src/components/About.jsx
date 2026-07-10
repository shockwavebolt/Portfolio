import portrait from "../previews/P1.JPG";

function About() {
  return (
    <>
      <div
        id="about"
        className="mb-24 md:col-start-2 lg:col-start-3 md:col-span-3 lg:col-span-4 grid grid-cols-subgrid gap-y-16"
      >
        <div className="col-span-full md:col-start-1 md:col-span-2 order-1 md:order-0">
          {/* <div className="bg-gray-600 h-100 shadow-[-4px_4px_0_0_#273043]"></div> */}
          <img alt="portrait" className=" border-t-2  border-solid border-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" src={portrait} />
        </div>

        <div className="col-span-full md:col-start-3 md:col-span-1 lg:col-span-2 order-2 md:order-0 flex flex-col gap-8">
          <div className="flex flex-col gap-3 ">
            <label className=" text-[14px]  md:text-[16px] lg:text-[20px] font-ibm text-accent">
              NAME/TITLE
            </label>
            <p className=" text-[14px] md:text-[16px] lg:text-[18px] font-inter">
              Claude Ronald Pierre, Product Engineer.
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <label className=" text-[14px]  md:text-[16px] lg:text-[20px] font-ibm text-accent">
              EDUCATION
            </label>
            <p className=" text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed font-inter">
              Attended CUNY Brooklyn College (2019-2023) for Multimedia
              Computing and later studied UI/UX Design and Frontend Engineering
              independently for 3 years.
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <label className=" text-[14px]  md:text-[16px] lg:text-[20px] font-ibm text-accent">
              STACK
            </label>
            <p className=" text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed font-inter">
              React, HTML/CSS, JavaScript, TailwindCSS, Figma.
            </p>
          </div>

          <div className="flex flex-col gap-3 ">
            <label className=" text-[14px]  md:text-[16px] lg:text-[20px] font-ibm text-accent">
              STATUS
            </label>
            <p className=" text-[14px] md:text-[16px] lg:text-[18px]  font-inter">
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
