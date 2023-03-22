import s from "./user.module.scss"

type UserType = {
    name: string
    id: number
    email: string
    status: string
    country: string
    follow: boolean
    avatar: string
    photo: string
    onFollow: (id:number) => void
    onUnfollow: (id:number) => void
}

export const User = (props: UserType) => {

    const onFollowHandler = () =>{
        props.onUnfollow(props.id)
    }

    const onUnfollowHandler = () =>{
        props.onFollow(props.id)
    }

    const photoUser = props.photo ? props.photo : props.avatar


    return (
        <div className={s.user__wrap}>

            <div className={s.user__avatarWrap}>

                <img src={photoUser} className={s.user__avatar}/>

                {
                    props.follow ?
                        <span onClick={onFollowHandler} className={`${s.user__follow} ${s.active}`}>Unfollow</span>
                        : <span onClick={onUnfollowHandler} className={s.user__follow}>Follow</span>
                }

            </div>

            <div className={s.user__content}>
                <div>
                    <span className={s.user__name}>{props.name}</span>

                    <div className={s.user__statusWrap}>
                        <span className={s.user__statusTitle}>Status:</span>
                        <p className={s.user__statusText}>
                            {props.status ? props.status : "no status"}
                        </p>
                    </div>
                </div>

                <div className={s.user__about}>
                    <div className={s.user__aboutWrap}>
                        <span className={s.user__aboutTitle}>Email:</span>
                        <span className={s.user__aboutText}>{props.email ? props.email : "---"}</span>
                    </div>

                    <div className={s.user__aboutWrap}>
                        <span className={s.user__aboutTitle}>Country:</span>
                        <span className={s.user__aboutText}>{props.country ? props.country : "---"}</span>
                    </div>
                </div>


            </div>


        </div>
    )
}