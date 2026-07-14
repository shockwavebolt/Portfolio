function Header() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-0">
      <h1 className="font-ibm text-[24px] lg:text-[64px]">CLAUDE R. PIERRE</h1>
      <div className="font-ibm flex flex-col gap-4 text-[14px] md:items-end md:gap-6 md:text-right md:text-[16px] lg:text-[20px]">
        <p>UI/UX Engineer.</p>
        <p>3 years of Design Experience.</p>
        <p>Still cooking.</p>
      </div>
    </div>
  );
}

export default Header;
