type PhotosUserType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    name: string
    email: string
    status: string
    country: string
    follow: boolean
    photos: PhotosUserType
}

type InitialStateUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


type ActionsTypes = ReturnType<typeof followAC> |
                    ReturnType<typeof unFollowAC> |
                    ReturnType<typeof setUsersAC> |
                    ReturnType<typeof setCurrentPageAC> |
                    ReturnType<typeof setTotalUserCountAC> |
                    ReturnType<typeof isFetchingAC> |
                    ReturnType<typeof ifFollowingAC>

const initialState: InitialStateUsersType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 260,
    currentPage: 18,
    isFetching: false,
    followingInProgress: [28545]

}

export const usersPageReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {


    switch (action.type) {

        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, follow: true} : el)}

        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, follow: false} : el)}

        case "SET__USERS":
            return {...state, users: action.users}

        case "SET__CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET__TOTAL_COUNT":
            return {...state, totalUsersCount: action.totalPage}

        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}

        case "TOGGLE_FOLLOWING_IS_PROGRESS":
            return {...state,
                followingInProgress: action.ifFollowing
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }

        default:
            return state
    }
}


export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        id: userID
    } as const
}
export const unFollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        id: userID
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET__USERS",
        users
    } as const
}
export const setCurrentPageAC = (page: number) => {
    return {
        type: "SET__CURRENT_PAGE",
        currentPage: page
    } as const
}
export const setTotalUserCountAC = (page: number) => {
    return {
        type: "SET__TOTAL_COUNT",
        totalPage: page
    } as const
}
export const isFetchingAC = (state: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching: state
    } as const
}
export const ifFollowingAC = (state: boolean, userID: number) => {
    return {
        type: "TOGGLE_FOLLOWING_IS_PROGRESS",
        ifFollowing: state,
        userID
    } as const
}