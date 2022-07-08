import { ChevronLeft,ChevronRight } from "heroicons-react";
import {useRouter} from "next/router"
import Link from "next/link"


export default function PaginationButtons() {

  const router = useRouter();
  

  const startIndex = Number(router.query.start) ||0;

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex >= 2 &&(
         <Link href={`/search?term=${router.query.term}&start=${startIndex - 2}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeft/>
            <p>previous</p>
          </div>  
        </Link>
         )}
         <Link href={`/search?term=${router.query.term}&start=${startIndex + 2}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronRight/>
            <p>next</p>
          </div>
         
         </Link>
    </div>
  )
}
