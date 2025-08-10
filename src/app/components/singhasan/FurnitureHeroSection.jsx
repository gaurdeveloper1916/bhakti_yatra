// Furniture-themed JSX version of the provided HTML
'use client'
export default function FurnitureHeroSection() {
  return (
    <section className="bg-[#302c42] overflow-hidden pb-9 px-4 md:px-8">
      <header className="flex mx-auto justify-between items-center max-w-[1300px] py-4">
        <div className="flex items-center gap-3">
          {/* Logo icons */}
        
          <img
            src="https://framerusercontent.com/images/1p19x2QIi5eoAovGxXaInsPGBQ.png"
            alt="Furniture Brand Text"
            className="w-8 md:w-12 lg:w-48 h-7 lg:h-40"
          />
        </div>
        <nav className="hidden sm:inline-block">
          <ul className="flex gap-3 md:gap-5 lg:gap-10">
            <li className="uppercase font-bold text-xs text-white">
              <a href="#">About</a>
            </li>
            <li className="uppercase font-bold text-xs text-white">
              <a href="#">Collections</a>
            </li>
            <li className="uppercase font-bold text-xs text-white">
              <a href="#">Materials</a>
            </li>
            <li className="uppercase font-bold text-xs text-white">
              <a href="#">Custom Design</a>
            </li>
          </ul>
        </nav>
        <div className="hidden sm:flex gap-3 md:gap-5 lg:gap-9">
          <button className="uppercase font-bold text-xs text-white border-2 border-white rounded-[40px] py-1 px-3 md:py-2 lg:py-4 md:px-4 lg:px-9">
            Contact Us
          </button>
          <button className="uppercase font-bold text-xs rounded-[40px] py-1 px-3 md:py-2 lg:py-4 md:px-4 lg:px-9 text-[#302c42] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
            Shop Now
          </button>
        </div>
        <button className="sm:hidden inline-block">
          <svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="33" height="3.71429" rx="1.85714" fill="url(#paint0_linear)" />
            <rect y="22.2857" width="33" height="3.71429" rx="1.85714" fill="url(#paint1_linear)" />
            <rect x="9" y="11.1429" width="24" height="3.71429" rx="1.85714" fill="url(#paint2_linear)" />
          </svg>
        </button>
      </header>

      <section className="relative flex flex-col-reverse md:flex-row mx-auto justify-between items-center gap-9 md:gap-4 max-w-[1300px] ">
        {/* Illustrative background paths (optional, can be replaced) */}

        <div className="md:w-[520px] z-20">
          <h1 className="text-3xl md:text-[36px] lg:text-[46px] leading-[56px] text-white font-bold">
            <span className="text-[#C0B7E8]">Elevate </span>Your Space with
            <span className="text-[#C0B7E8]"> Timeless Furniture</span>
          </h1>
          <p className="text-base text-white mt-4 md:mt-9 mb-10 md:mb-16">
            Discover a curated collection of luxury furniture that combines comfort,
            style, and craftsmanship. Create interiors that reflect your personality.
          </p>
          <div className="flex gap-6 sm:gap-10">
            <button className="uppercase font-bold text-xs rounded-[40px] py-2 lg:py-4 px-4 lg:px-9 text-[#302c42] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              Explore Collections
            </button>
          </div>
        </div>
        <div className="p-4 z-20  rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] bg-opacity-20">
          <img
            className="max-w-[490px] w-full rounded-3xl"
            src="./selected/01.png" // Replace with furniture banner image
            alt="Luxury Furniture Display"
          />
        </div>
      </section>

      {/* Contact Cards */}
      <div className="flex relative z-30 justify-center sm:justify-between gap-5 items-center mt-6 mx-auto max-w-[1300px] rounded-[90px] py-3 px-3 sm:p-8 lg:p-14 bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]">
        {/* Location */}
        <div className="flex sm:flex-1 gap-4 lg:gap-6">
          <svg className="flex-none" width="42" height="63" fill="none" viewBox="0 0 42 63">
            {/* Location icon path */}
          </svg>
          <div className="text-white">
            <h2 className="text-2xl font-bold">Visit Our Showroom</h2>
            <p className="text-sm mt-3">1234 Luxury St, Interior City, Designland</p>
          </div>
        </div>

        <span className="h-28 w-[1px] hidden sm:inline-block bg-[#C0B7E8]" />

        {/* Phone */}
        <div className="hidden sm:flex flex-1 gap-4 lg:gap-6">
          <svg className="flex-none" width="51" height="51" viewBox="0 0 51 51">
            {/* Phone icon path */}
          </svg>
          <div className="text-white">
            <h2 className="text-2xl font-bold">Call Us</h2>
            <p className="text-sm mt-3">(+91) 98765-43210</p>
          </div>
        </div>

        <span className="hidden lg:inline-block h-28 w-[1px] bg-[#C0B7E8]" />

        {/* Email */}
        <div className="hidden lg:flex flex-1 gap-4 lg:gap-6">
          <svg className="flex-none" width="55" height="45" viewBox="0 0 55 45">
            {/* Mail icon path */}
          </svg>
          <div className="text-white">
            <h2 className="text-2xl font-bold">Email Us</h2>
            <p className="text-sm mt-3">support@furnihome.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
