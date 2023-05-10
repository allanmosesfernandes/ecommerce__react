import { createAction } from "../../utils/firebase/reducers/reducer.utils"
import  USER_ACTION_TYPES  from "./user.types"

export const setCurrentUser = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
}