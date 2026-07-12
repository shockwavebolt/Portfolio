function Project({ id, title, description, previewVideo, stack, link }) {
  return (
    <div className="border-inactive col-span-full my-16 grid w-full grid-cols-subgrid gap-4 gap-y-8 border-t-2 border-solid pt-8 md:col-span-3 md:gap-x-6 lg:col-span-4 lg:gap-x-16">
      <div className="col-span-full flex flex-col gap-8 md:col-span-2 md:col-start-1">
        <div className="flex flex-col gap-4">
          <label className="font-ibm text-accent text-[14px] md:text-[16px] lg:text-[20px]">
            {title}
          </label>
          <p className="font-inter text-[14px] leading-relaxed md:text-[16px] lg:text-[18px]">
            {description}
          </p>
        </div>

        {/* <video
          autoPlay
          muted
          loop
          width="100%"
          height="100%"
          className="object-cover p-0.5 border-t  border-solid border-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
        >
          <source src={previewVideo} type="video/webm" />
        </video> */}
      </div>

      <div className="col-span-full flex flex-col gap-8 md:order-0 md:col-span-1 md:col-start-3 lg:col-span-2">
        <div className="flex flex-col gap-4 md:mt-0">
          <label className="font-ibm text-accent text-[14px] md:text-[16px] lg:text-[20px]">
            STACK
          </label>
          <p className="font-inter text-[14px] leading-relaxed md:text-[16px] lg:text-[18px]">
            {stack}
          </p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent flex items-center gap-2 self-start transition-colors"
        >
          <span className="font-ibm text-[14px] md:text-[16px] lg:text-[20px]">
            VIEW LIVE PROJECT
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <g clipPath="url(#clip0_223_429_1)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.48528 8.4853C3.80211 13.1685 3.80211 20.7727 8.48528 25.4559C13.1685 30.139 20.7727 30.139 25.4558 25.4559C30.139 20.7727 30.139 13.1685 25.4558 8.4853C20.7727 3.80213 13.1685 3.80213 8.48528 8.4853ZM9.19239 9.19241C4.89954 13.4853 4.89954 20.4559 9.19239 24.7488C13.4852 29.0416 20.4559 29.0416 24.7487 24.7488C29.0416 20.4559 29.0416 13.4853 24.7487 9.19241C20.4559 4.89956 13.4852 4.89956 9.19239 9.19241ZM20.738 13.9102L20.1405 19.8294L21.1418 19.8704L21.9203 12.0208L14.0629 12.8071L14.1245 13.8105L20.0295 13.2045L11.6673 21.5668L12.3744 22.2739L20.738 13.9102Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_223_429_1">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 16.9706) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </a>
      </div>
      <video
        autoPlay
        muted
        loop
        width="100%"
        height="100%"
        className={`col-span-full border-t-2 border-solid object-cover md:col-span-3 ${id === 1 ? "border-[#637E67]" : id === 2 ? "border-white" : id === 3 ? "border-white" : ""} shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]`}
      >
        <source src={previewVideo} type="video/webm" />
      </video>
    </div>
  );
}

export default Project;
