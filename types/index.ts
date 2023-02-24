import {JWT} from 'next-auth/jwt'
import {User, Session} from 'next-auth'

export enum TokenError {
   RefreshAccessTokenError = 'RefreshAccessTokenError',
}

export interface ExtendedToken extends JWT {
   accessToken: string
   refreshToken: string
   accessTokenExpiresAt: number
   user: User
   error?: TokenError
}

export interface ExtendedSession extends Session {
   accessToken: ExtendedToken['accessToken']
   error: ExtendedToken['error']
}

export interface PlaylistContextState {
   playlists: SpotifyApi.PlaylistObjectSimplified[]
   selectedPlaylistId: string | null
   selectedPlaylist: SpotifyApi.SinglePlaylistResponse | null
}

export interface SongContextState {
   selectedSongId?: string
   selectedSong: any | null
   volume: number
   isPlaying: boolean
   deviceId: string | null
}

export interface IPlaylistContext {
   playlistContextState: PlaylistContextState
   updatePlaylistContextState: (
      updateObj: Partial<PlaylistContextState>
   ) => void
}

export interface ISongContext {
   songContextState: SongContextState
}

export enum SongReducerActionType {
   SetDevice = 'SetDevice',
}

export type SongReducerAction = {
   type: SongReducerActionType.SetDevice
   payload: Pick<SongContextState, 'deviceId' | 'volume'>
}
