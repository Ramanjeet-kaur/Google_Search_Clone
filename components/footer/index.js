import {GlobeAlt } from "heroicons-react";

export default function Footer() {
  return (
    <footer className= "footer grid w-full divide-y-{1px} divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-1 py-3 flex space-x-1 border-b	border-bottom-width: 1px border-gray-300" >
        <GlobeAlt />
        <p> India</p>
      </div>
      <div className=" grid grid-cols-1   p-5 md:grid-cols-2 lg:gap-y-4 grid-flow-row-dense px-5 py-3" >
      <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How search works</p>
      </div>
      <div className="flex justify-center space-x-8  whitespace-nowrap md:ml-auto ">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
      </div>
      </div>
      </footer>

  )
}
