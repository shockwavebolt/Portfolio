function Header() {
  return (
    <div className="flex flex-col gap-8 md:gap-0 md:flex-row  md:justify-between">
      <h1 className="text-[24px] md:text-[32px] lg:text-[64px] font-ibm">
        CLAUDE R. PIERRE
      </h1>
      <div className=" flex flex-col gap-4 md:gap-6 lg:gap-8 md:items-end md:text-right text-[12px] md:text-[16px] lg:text-[20px] font-ibm">
        <p>UI/UX Engineer.</p>
        <p>3 years of Design Experience.</p>
        <p>Still cooking.</p>
      </div>
    </div>
  );
}

export default Header;
