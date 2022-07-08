import Optionbar from "../optionbar"
import{ DotsVertical,
LocationMarker,
Newspaper,
Photograph,
Play,
SearchOutline
} from "heroicons-react"

export default function Headeroptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
    {/*left*/}
    <div className="flex space-x-6">
        <Optionbar Icon={SearchOutline} title="All" selected/>
        <Optionbar Icon={Photograph} title="Images" />
        <Optionbar Icon={Play} title="videos" />
        <Optionbar Icon={Newspaper} title="News" />
        <Optionbar Icon={LocationMarker} title="Maps" />
        <Optionbar Icon={DotsVertical} title="More" />
    </div>

    {/*right*/}
    <div className="flex space-x-4">
        <p className="link"> Tools </p>
    </div>
    
    </div>
  )
}
