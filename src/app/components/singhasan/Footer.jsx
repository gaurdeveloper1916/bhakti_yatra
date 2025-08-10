const Footer = () => {
  return (
    <div className=" bg-black/80 pt-9">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          {/* Logo & Description */}
          <div className="md:w-[316px]">
            <h1 className="text-white font-extrabold text-[18px]">
              <span className="text-rose-600">SINGHASAN</span>
            </h1>
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit non. Incidunt dolorum adipisci,
              tempore asperiores nemo odio facere officiis enim animi placeat eaque nesciunt alias beatae id, at dicta.
            </p>
            <div className="mt-[18px] flex gap-4">
              {[
                { href: '#', src: 'https://i.pinimg.com/736x/4a/4c/22/4a4c224a0c6667178bebdfa3b6bdb92b.jpg', alt: 'facebook' },
                { href: '/', src: 'https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png', alt: 'linkedin' },
                { href: '/', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png', alt: 'instagram' },
                { href: '', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png', alt: 'twitter' },
              ].map((icon, index) => (
                <a key={index} className="hover:scale-110" target="_blank" rel="noreferrer" href={icon.href}>
                  <img
                    alt={`${icon.alt} icon`}
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    style={{ color: 'transparent' }}
                    src={icon.src}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:w-[316px]">
            {/* Phone */}
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                {/* Phone SVG */}
                {/* ...Paste your phone SVG here... */}
              </div>
              <div className="ml-[18px]">
                <a href="tel:+911800123444" className="font-Inter text-[14px] font-medium text-white">
                  +91 1800123444
                </a>
                <p className="font-Inter text-[12px] font-medium text-white">Support Number</p>
              </div>
            </div>

            {/* Email */}
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                {/* Email SVG */}
                {/* ...Paste your email SVG here... */}
              </div>
              <div className="ml-[18px]">
                <a href="mailto:hi@singhasan.com" className="font-Inter text-[14px] font-medium text-white">
                  hi@singhasan.com
                </a>
                <p className="font-Inter text-[12px] font-medium text-white">Support Email</p>
              </div>
            </div>

            {/* Address */}
            <div className="mt-[23px] flex">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                {/* Address SVG */}
                {/* ...Paste your address SVG here... */}
              </div>
              <div className="ml-[18px]">
                <p className="font-Inter text-[14px] font-medium text-white">
                  Sub Nerul, Mumbai, India, 123456
                </p>
                <p className="font-Inter text-[12px] font-medium text-white">Address</p>
              </div>
            </div>
          </div>

          {/* Links & App Download */}
          <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
            <div>
              <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Pages</p>
              <ul>
                {[
                  { label: 'Home', href: '/' },
                  { label: 'News', href: '/our-tutors' },
                  { label: 'Contact', href: '/become-a-tutor' },
                  { label: 'Plans and pricing', href: '/plans-and-pricing' },
                  { label: 'Terms and conditions', href: '/terms-and-conditions' },
                  { label: 'Privacy policy', href: '/privacy-policy' },
                ].map((page, index) => (
                  <li key={index} className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href={page.href}
                    >
                      {page.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:mt-0">
              <p className="text-deutziawhite font-inter text-[18px] font-medium">Furniture Category</p>
              <div className="flex gap-4 sm:flex-col">
                 <ul>
                {[
                  { label: 'Living Room', href: '/' },
                  { label: 'Bedroom', href: '/our-tutors' },
                  { label: 'Dining Room', href: '/become-a-tutor' },
                  { label: 'Office Furniture', href: '/plans-and-pricing' },
                  { label: 'Outdoor Furniture', href: '/terms-and-conditions' },
                  { label: 'Kids Furniture', href: '/privacy-policy' },
                ].map((page, index) => (
                  <li key={index} className="mt-[15px]">
                    <a
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      href={page.href}
                    >
                      {page.label}
                    </a>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="mt-[30px] text-white" />
        <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
          <p className="text-[10px] font-normal text-white md:text-[12px]">
            © Copyright 2024, All Rights Reserved by YOUR WEBSITES. PVT. LTD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
