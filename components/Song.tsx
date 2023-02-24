import {convertDuration} from '@/utils/durationConverter'
import Image from 'next/image'

interface Props {
   item: SpotifyApi.PlaylistTrackObject
   itemIndex: number
}

function Song({item: {track}, itemIndex}: Props) {
   console.log(track)

   return (
      <div className="grid grid-cols-2 text-gray-500 px-5 py-5 hover:bg-gray-900 rounded-lg cursor-pointer">
         <div className="flex items-center space-x-4">
            <p>{itemIndex + 1}</p>
            <div>
               <Image
                  src={track?.album.images[0].url || ''}
                  alt=""
                  height={40}
                  width={40}
               />
            </div>
            <div>
               <p className="w-36 lg:w-72 truncate text-white">{track?.name}</p>
               <div className="w-40">{track?.artists[0].name}</div>
            </div>
         </div>
         <div className="flex justify-between items-center ml-auto md:ml-0">
            <p className="hidden md:block w-40">{track?.album.name}</p>
            <p>{convertDuration(track?.duration_ms as number)}</p>
         </div>
      </div>
   )
}

export default Song
