function About() {
  return (
    <>
      <div
        id="about"
        className="mb-24 md:col-start-2 lg:col-start-3 md:col-span-3 lg:col-span-4 grid grid-cols-subgrid gap-y-16"
      >
        <div className="col-span-full md:col-start-1 md:col-span-2 order-1 md:order-0">
          <div className="bg-gray-600 h-100 shadow-[-4px_4px_0_0_#273043]"></div>
        </div>

        <div className="col-span-full md:col-start-3 md:col-span-1 lg:col-span-2 order-2 md:order-0 flex flex-col gap-8">
          <div className="flex flex-col gap-3 ">
            <label className=" text-[14px]  md:text-[16px] lg:text-[20px] font-ibm text-accent">
              NAME/TITLE
            </label>
            <p className=" text-[14px] md:text-[16px] lg:text-[16px] font-inter">
              Claude Ronald Pierre, UI/UX Engineer
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <label className=" text-[14px]  md:text-[16px] lg:text-[20px] font-ibm text-accent">
              EDUCATION
            </label>
            <p className=" text-[14px] md:text-[16px] lg:text-[16px] font-inter">
              Attended Brooklyn College (2019-2023) for Multimedia Computing and
              later studied Design independently for 3 years.
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <label className=" text-[14px]  md:text-[16px] lg:text-[20px] font-ibm text-accent">
              STACK
            </label>
            <p className=" text-[14px] md:text-[16px] lg:text-[16px] font-inter">
              Figma, HTML/CSS, JavaScript, React, Tailwind.
            </p>
          </div>

          <div className="flex flex-col gap-3 ">
            <label className=" text-[14px]  md:text-[16px] lg:text-[20px] font-ibm text-accent">
              STATUS
            </label>
            <p className=" text-[14px] md:text-[16px] lg:text-[16px] font-inter">
              Open to work opportunities, currently seeking a full-time position
              in UI/UX design and front-end development.
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
