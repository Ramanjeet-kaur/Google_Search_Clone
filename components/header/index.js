import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react";
import { Microphone, SearchOutline,XOutline } from "heroicons-react"
import Headeroptions from "../headeroptions";



export default function Header() {

  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) =>{
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
       
        <Image
                src = "https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
                height={60}
                width={120}
                onClick={() => router.push('/')}
                className ="cursor-pointer"
               />
        <form className="flex  flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
            <input ref={searchInputRef} type="text" className="flex-grow w-full focus:outline-none"/>
            <XOutline className=" Search-box h-6 pr-2 text-gray-500 cursor-pointer
             transition duration-100 transform"
             onClick={() =>{searchInputRef.current.value =""}}
             />
            <Microphone className="Search-box mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-2 border-gray-300"/>
            <SearchOutline className=" Search-box h-6 hidden sm:inline-flex text-blue-500  pl-2 border-gray-300"/>
            <button hidden type="submit" onClick={search}>Search</button>
            
        </form>
        
        <img className="h-10 ml-auto rounded-full cursor-pointer"
                  loading="lazy"
                  src="https://www.w3schools.com/w3images/avatar5.png" 
                  alt="profile image"
              />
        </div>
        
        <Headeroptions/>
        
    </header>
  )
}
