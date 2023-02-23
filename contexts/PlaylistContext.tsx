import {createContext, useContext, ReactNode, useState, useEffect} from 'react'
import {IPlaylistContext, PlaylistContextState} from '../types'
import {useSession} from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'

const defaultPlaylistContextState: PlaylistContextState = {
   playlists: [],
   selectedPlaylistId: null,
   selectedPlaylist: null,
}

export const PlaylistContext = createContext<IPlaylistContext>({
   playlistContextState: defaultPlaylistContextState,
   updatePlaylistContextState: () => {},
})

export const usePlaylistContext = () => useContext(PlaylistContext)

const PlaylistContextProvider = ({children}: {children: ReactNode}) => {
   const spotifyApi = useSpotify()
   const {data: session} = useSession()
   const [playlistContextState, setPlaylistContextState] = useState(
      defaultPlaylistContextState
   )

   const updatePlaylistContextState = (
      updateObj: Partial<PlaylistContextState>
   ) => {
      setPlaylistContextState((pre) => {
         return {
            ...pre,
            ...updateObj,
         }
      })
   }
   const PlaylistContextProviderData = {
      playlistContextState,
      updatePlaylistContextState,
   }
   useEffect(() => {
      const getUserPlaylists = async () => {
         const userPlaylistResponse = await spotifyApi.getUserPlaylists()
         updatePlaylistContextState({
            playlists: userPlaylistResponse.body.items,
         })
         // setPlaylistContextState({
         //    playlists: userPlaylistResponse.body.items,
         // })
      }
      if (spotifyApi.getAccessToken()) {
         getUserPlaylists()
      }
   }, [session])
   return (
      <PlaylistContext.Provider value={PlaylistContextProviderData}>
         {children}
      </PlaylistContext.Provider>
   )
}

export default PlaylistContextProvider
