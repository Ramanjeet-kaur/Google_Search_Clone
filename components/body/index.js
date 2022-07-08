import Image from "next/image"
import { useRef } from "react"
import { useRouter } from 'next/router'
import { Microphone, SearchOutline,XOutline } from "heroicons-react"
export default function Body() {


  const router = useRouter();
  const searchInputRef= useRef(null);
  
  const search = (e) =>{
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  };
  
  return (

    <div>   
            <form className="flex flex-col items-center mt-40 flex-grow ">
               <Image
                src = "https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
                height={150}
                width={300}
               />
               <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-500 px-5 py-3 items-center sm:max-w-xl lg:mac-w-2xl">
                    <SearchOutline className="mr-4 text-gray-500"/>
                    <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none"/>
                    <XOutline className=" Search-box h-6 pr-1 text-gray-500 cursor-pointer
                      transition duration-100 transform"
                      onClick={() =>{searchInputRef.current.value =""}}
                       />
                    <Microphone />
               </div>
               <div className="mt-3 flex flex-col w-1/2 space-y-2 justify-center sm:space-y-0 sm:flex-row sm:space-x-4">
                    
                    <button onClick ={search} className="btn"> Google Search</button>
                    <button onClick ={search} className="btn"> I am Feeling Lucky</button> 
               </div>




            </form>


    </div>
  )
}
