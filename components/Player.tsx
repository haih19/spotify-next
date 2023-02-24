import {useSongContext} from '@/contexts/SongContext'
import useSpotify from '@/hooks/useSpotify'
import {
   faBackwardStep,
   faForwardStep,
   faPause,
   faPlay,
   faRepeat,
   faShuffle,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import VolumeUpIcon from './VolumeUpIcon'

function Player() {
   const spotifyApi = useSpotify()
   const {
      songContextState: {isPlaying, selectedSong, deviceId, volume},
   } = useSongContext()

   return (
      <div className="h-24 bg-gradient-to-b from-black grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
         <div className="flex items-center space-x-4">Selected song</div>
         <div className="flex justify-evenly items-center">
            <FontAwesomeIcon
               className="icon-playback "
               icon={faShuffle}
            />
            <FontAwesomeIcon
               className="icon-playback "
               icon={faBackwardStep}
            />
            {false ? (
               <FontAwesomeIcon
                  className="icon-playback "
                  icon={faPause}
               />
            ) : (
               <FontAwesomeIcon
                  className="icon-playback "
                  icon={faPlay}
               />
            )}
            <FontAwesomeIcon
               className="icon-playback "
               icon={faForwardStep}
            />
            <FontAwesomeIcon
               className="icon-playback "
               icon={faRepeat}
            />
         </div>
         <div className="flex justify-end items-center pr-5 space-x-3 md:space-x-4">
            <VolumeUpIcon />
            <input
               type="range"
               min={0}
               max={100}
               className="w-20 md:w-auto"
            />
         </div>
      </div>
   )
}

export default Player
