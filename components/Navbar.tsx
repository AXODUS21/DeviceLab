import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 px-5 py-3 backdrop-blur-xs bg-transparent z-40">
      <div className="flex gap-5 items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src={"/img/logo.png"}
            alt={"logo"}
            width={100}
            height={100}
            className="border-none w-7 h-9 object-cover"
          />
          <h2 className="text-2xl pt-1">DeviceLab</h2>
        </div>

        <div className="flex items-center gap-5 ">
          <button className="nav-button">Devices</button>
          <button className="nav-button">My Account</button>
          <button className="nav-button">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar