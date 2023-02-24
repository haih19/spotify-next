import {
   SongContextState,
   SongReducerAction,
   SongReducerActionType,
} from '@/types'

export const songReducer = (
   state: SongContextState,
   action: SongReducerAction
) => {
   switch (action.type) {
      case SongReducerActionType.SetDevice:
         return {
            ...state,
            deviceId: action.payload.deviceId,
            volume: action.payload.volume,
         }

      default:
         return state
   }
}
