import {
   faHome,
   faMagnifyingGlass,
   faBook,
   faSquarePlus,
   faHeart,
   faWifi,
} from '@fortawesome/free-solid-svg-icons'
import IconButton from './IconButton'
import {useSession, signOut} from 'next-auth/react'

const Divider = () => <hr className="border-t-[0.1px] border-gray-900" />

function Sidebar() {
   const {data: session} = useSession()
   return (
      <div className=" scrollbar-hidden text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block ">
         <div className="space-y-4">
            {session?.user && (
               <button
                  onClick={() => {
                     signOut()
                  }}>
                  {session.user.name} - Log Out
               </button>
            )}
            <IconButton
               icon={faHome}
               label="Home"
            />
            <IconButton
               icon={faMagnifyingGlass}
               label="Search"
            />
            <IconButton
               icon={faBook}
               label="Book"
            />
            <Divider />

            <IconButton
               icon={faSquarePlus}
               label="Create Playlist"
            />
            <IconButton
               icon={faHeart}
               label="Liked Songs"
            />
            <IconButton
               icon={faWifi}
               label="Your Episodes"
            />
            <Divider />
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
            <p className="cursor-pointer hover:text-white">PLAYLIST</p>
         </div>
      </div>
   )
}

export default Sidebar
