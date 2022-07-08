import { ViewGrid} from "heroicons-react"


export default function Navbar() {

  return (
<header className=" flex-w-full flex p-5 justify-between text-sm text-gray-700 ">
      
        <div className="flex space-x-4 items-center">
            <p className="link"> Store</p>
        </div>
        <div div className="flex space-x-4 items-center">
              <p className="link"> Gmail</p>
              <p className="link"> Images</p>
              <p  className="link"> Account</p>
              <ViewGrid className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
              <img className="h-10 rounded-full cursor-pointer"
                  loading="lazy"
                  src="https://www.w3schools.com/w3images/avatar5.png" 
                  alt="profile image"
              />
        </div>
 </header>
  )
}

