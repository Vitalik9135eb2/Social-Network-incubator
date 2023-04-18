


type ActionType = ReturnType<typeof setUserDataAC>

type InitialAuthStateType ={
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state:InitialAuthStateType = initialState, action:ActionType):InitialAuthStateType =>{

    switch (action.type){
        case "SET_USER_DATA":
            return {...state, ...action.data, isAuth: true}

        default:
            return state
    }
}


export const setUserDataAC =(userId:number, email:string, login:string) => {
    return{
        type:"SET_USER_DATA",
        data:{userId,email,login}
    } as const
}