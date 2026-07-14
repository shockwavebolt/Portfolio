function Contact() {
  return (
    <div
      id="contact"
      className="h-screen md:col-span-3 md:col-start-2 lg:col-span-4 lg:col-start-3"
    >
      <div className="flex flex-col gap-32">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <label className="font-ibm text-accent text-[14px] md:text-[16px] lg:text-[20px]">
              EMAIL
            </label>
            <a
              href="mailto:clauderonaldpierre@gmail.com"
              className="font-inter text-[14px] hover:text-accent md:text-[16px] lg:text-[18px]"
            >
              clauderonaldpierre@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <label className="font-ibm text-accent text-[14px] md:text-[16px] lg:text-[20px]">
              GITHUB
            </label>
            <a
              href="https://github.com/shockwavebolt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[14px] hover:text-accent md:text-[16px] lg:text-[18px]"
            >
              https://github.com/shockwavebolt
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <label className="font-ibm text-accent text-[14px] md:text-[16px] lg:text-[20px]">
              LINKEDIN
            </label>
            <a
              href="https://www.linkedin.com/in/clauderonaldpierre/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-[14px] hover:text-accent md:text-[16px] lg:text-[18px]"
            >
              https://www.linkedin.com/in/clauderonaldpierre
            </a>
          </div>
        </div>
        <p className="font-ibm text-center text-[14px] md:text-left md:text-[16px] lg:text-[20px]">
          MADE WITH{" "}
          <span className="text-accent text-[16px] md:text-[18px] lg:text-[24px]">
            &#10084;
          </span>
          . THE BRONX, NYC.
        </p>
      </div>
    </div>
  );
}

export default Contact;
