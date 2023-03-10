import {
   createContext,
   useContext,
   ReactNode,
   useState,
   useEffect,
   useReducer,
} from 'react'
import {SongContextState, ISongContext, SongReducerActionType} from '../types'
import {useSession} from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'
import {songReducer} from '@/reducers/songReducer'

const defaultSongContextState: SongContextState = {
   selectedSongId: undefined,
   selectedSong: null,
   isPlaying: false,
   volume: 50,
   deviceId: null,
}

export const SongContext = createContext<ISongContext>({
   songContextState: defaultSongContextState,
})

export const useSongContext = () => useContext(SongContext)

const SongContextProvider = ({children}: {children: ReactNode}) => {
   const spotifyApi = useSpotify()
   const {data: session} = useSession()

   const [songContextState, dispatchSongAction] = useReducer(
      songReducer,
      defaultSongContextState
   )
   const songContextProviderData = {
      songContextState: defaultSongContextState,
   }

   //    useEffect(() => {
   //       const setCurrentDevice = async () => {
   //          const availableDevicesResponse = await spotifyApi.getMyDevices()
   //          console.log(availableDevicesResponse)

   //          if (!availableDevicesResponse.body.devices) return
   //          const {id: deviceId, volume_percent} =
   //             availableDevicesResponse.body.devices[0]
   //          dispatchSongAction({
   //             type: SongReducerActionType.SetDevice,
   //             payload: {
   //                deviceId,
   //                volume: volume_percent as number,
   //             },
   //          })
   //          await spotifyApi.transferMyPlayback([deviceId as string])
   //       }
   //       if (spotifyApi.getAccessToken()) {
   //          setCurrentDevice()
   //       }
   //    }, [spotifyApi, session])
   return (
      <SongContext.Provider value={songContextProviderData}>
         {children}
      </SongContext.Provider>
   )
}

export default SongContextProvider
