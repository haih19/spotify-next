import {signOut, useSession} from 'next-auth/react'
import {usePlaylistContext} from '../contexts/PlaylistContext'
import Image from 'next/image'
import userIcon from '../assets/user.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'
import {pickRandom} from '@/utils/pickRandom'
import Songs from './Songs'

const colours = [
   'from-indigo-500',
   'from-blue-500',
   'from-green-500',
   'from-red-500',
   'from-yellow-500',
   'from-pink-500',
   'from-purple-500',
]

function Center() {
   const {
      playlistContextState: {selectedPlaylist, selectedPlaylistId},
   } = usePlaylistContext()
   const [fromColour, setFromColour] = useState<string | null>(null)

   const {data: session} = useSession()

   // console.log(session?.user)

   useEffect(() => {
      setFromColour(pickRandom(colours))
   }, [selectedPlaylistId])

   console.log(selectedPlaylist)

   return (
      <div className="flex-grow text-white relative h-screen overflow-y-scroll scrollbar-hidden">
         <header className="absolute top-5 right-8">
            <div
               className="flex items-centers bg-black space-x-3 opacity-90 hover:opacity-50 cursor-pointer rounded-full py-1 pl-1 pr-2"
               onClick={() => {
                  signOut()
               }}
               title="Log Out">
               <Image
                  src={
                     session?.user?.image ? `${session?.user?.image}` : userIcon
                  }
                  alt="User Avatar"
                  width={30}
                  height={30}
                  className="rounded-full object-cover h-8 w-8 flex items-center"
               />
               <h2 className="flex items-center whitespace-nowrap">
                  {session?.user?.name}
               </h2>
               <FontAwesomeIcon
                  className="flex items-center mt-2.5"
                  icon={faAngleDown}
               />
            </div>
         </header>
         <section
            className={`flex items-end space-x-7 bg-gradient-to-b to-black h-80 p-8 ${fromColour}`}>
            {selectedPlaylist && (
               <>
                  <Image
                     src={selectedPlaylist.images[0].url}
                     height={176}
                     width={176}
                     className="shadow-2xl"
                     alt=""
                  />
                  <div>
                     <p>Playlist</p>
                     <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
                        {selectedPlaylist.name}
                     </h1>
                  </div>
               </>
            )}
         </section>
         <div>
            <Songs />
         </div>
      </div>
   )
}

export default Center
