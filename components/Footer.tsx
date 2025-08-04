import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="px-5 py-10 pb-5">
      <div className="flex justify-around pb-5 border-b border-white/50">
        <div className="space-y-10">
          <div className="">
            <Image
              src={"/img/logo.svg"}
              alt="logo"
              className="h-10 w-10"
              height={50}
              width={50}
            />
          </div>
          <p className="max-w-xl">
            Peekly is a Chrome and Firefox extension that allows you to easily
            simulate a phone or tablet in a very realistic way with just one
            click. It's very useful for testing a website, taking beautiful
            screenshots or videos for presentations or emails, doing customer
            demos, etc.
          </p>
        </div>
        <div className=""></div>
        <div className="grid">
          <h2>Company</h2>
          <button>About</button>
          <button>Legal notices</button>
          <button>Personal data</button>
        </div>
        <div className="grid">
          <h2>Products</h2>
          <button>About</button>
          <button>Legal notices</button>
          <button>Personal data</button>
        </div>
      </div>
      <div className="py-2 px-5">
        <div>
          © 2021 Mobile FIRST | This site is protected by reCAPTCHA and the
          Google <a href="">Privacy Policy</a> and{" "}
          <a href="">Terms of Service</a> apply
        </div>
      </div>
    </div>
  );
}

export default Footer