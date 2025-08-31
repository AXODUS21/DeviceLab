import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="px-15 py-10 pb-5">
      <div className="flex justify-around pb-5 border-b border-white/50">
        <div className="space-y-10">
          <div className="flex items-center">
            <Image
              src={"/img/logo.png"}
              alt="logo"
              className="h-10 w-10"
              height={50}
              width={50}
            />
            <p className="text-lg pt-1">DeviceLab</p>
          </div>
          <p className="max-w-xl">
            DeviceLab is a powerful browser extension built for developers,
            designers, and product teams who care about delivering flawless user
            experiences. With just one click, you can preview any website on
            multiple devices and screen sizes without leaving your browser.
          </p>
        </div>
        <div className=""></div>
        <div className="flex flex-col items-start gap-5">
          <h2>Company</h2>
          <button>About</button>
          <button>Legal notices</button>
          <button>Privacy policy</button>
          <button>Linkedin</button>
          <button>Contact us</button>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2>Products</h2>
          <button>Chrome extension</button>
          <button>Firefox extension</button>
          <button>HD Mockups</button>
          <button>Blog</button>
          <button>Support</button>
        </div>
      </div>
      <div className="py-2">
        <div className="text-xs">
          © 2021 Mobile FIRST | This site is protected by reCAPTCHA and the
          Google <a href="">Privacy Policy</a> and{" "}
          <a href="">Terms of Service</a> apply
        </div>
      </div>
    </div>
  );
}

export default Footer