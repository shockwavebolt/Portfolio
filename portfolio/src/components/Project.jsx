function Project({ title, description, previewVideo, stack, link }) {
  return (
    <div className="col-span-full md:col-span-3 lg:col-span-4 w-full border-t border-solid border-secondary pt-8 gap-8 grid grid-cols-subgrid">
      <div className="col-span-full md:col-start-1 md:col-span-2 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <label className="text-[14px] md:text-[16px] lg:text-[20px] font-ibm text-accent">
            {title}
          </label>
          <p className="text-[14px] md:text-[16px] lg:text-[16px] font-inter">
            {description}
          </p>
        </div>

        <video
          autoPlay
          muted
          loop
          width="100%"
          height="100%"
          className="object-cover p-0.5 border-t  border-solid border-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
        >
          <source src={previewVideo} type="video/webm" />
        </video>
      </div>

      <div className="col-span-full md:col-start-3 md:col-span-1 lg:col-span-2 flex flex-col gap-8">
        <div className="flex flex-col mt-8 gap-4 md:mt-0">
          <label className="text-[14px] md:text-[16px] lg:text-[20px] font-ibm text-accent">
            STACK
          </label>
          <p className="text-[14px] md:text-[16px] lg:text-[16px] font-inter">
            {stack}
          </p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center hover:text-accent transition-colors"
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
      {/* <video
        autoPlay
        muted
        loop
        width="100%"
        height="100%"
        className="object-cover col-span-3 p-0.5 border-t-2  border-solid border-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
"
      >
        <source src={previewVideo} type="video/webm" />
      </video> */}
    </div>
  );
}

export default Project;
