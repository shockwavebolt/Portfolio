function Contact() {
  return (
    <div
      id="contact"
      className="my-24 h-screen md:col-start-2 lg:col-start-3 md:col-span-3 lg:col-span-4"
    >
      <div className="flex flex-col gap-32">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-4">
            <label className=" text-[14px] md:text-[16px] lg:text-[20px] font-ibm text-accent">
              EMAIL
            </label>
            <p className="text-[14px] md:text-[16px] lg:text-[16px] font-inter">
              clauderonaldpierre@gmail.com
            </p>

            <div className="flex flex-col gap-4">
              <label className="text-[14px] md:text-[16px] lg:text-[20px] font-ibm text-accent">
                GITHUB
              </label>
              <p className="text-[14px] md:text-[16px] lg:text-[16px] font-inter">
                https://github.com/shockwavebolt
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[14px] md:text-[16px] lg:text-[20px] font-ibm text-accent">
                LINKEDIN
              </label>
              <p className="text-[14px] md:text-[16px] lg:text-[16px] font-inter">
                https://www.linkedin.com/in/clauderonaldpierre/
              </p>
            </div>
          </div>
        </div>
        <p className="text-[14px] md:text-[16px] lg:text-[20px] font-ibm">
          MADE WITH <span>&#10084;</span>. THE BRONX, NYC.
        </p>
      </div>
    </div>
  );
}

export default Contact;
