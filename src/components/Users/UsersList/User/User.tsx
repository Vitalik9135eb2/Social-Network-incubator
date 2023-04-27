import s from "./user.module.scss"
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followAPI} from "../../../../api/api";

type UserPropsType = {
    name: string
    id: number
    email: string
    status: string
    country: string
    follow: boolean
    avatar: string
    photo: string
    followingInProgress: number[]
    onFollow: (id: number) => void
    onUnfollow: (id: number) => void
    ifFollowing: (state: boolean, userID: number) => void

}

export const User = (props: UserPropsType) => {

    const onFollowHandler = () => {
        props.onUnfollow(props.id)
    }

    const onUnfollowHandler = () => {
        props.onFollow(props.id)
    }

    const photoUser = props.photo ? props.photo : props.avatar


    return (
        <div className={s.user__wrap}>

            <div className={s.user__avatarWrap}>
                <NavLink to={"/profile/" + props.id}>
                    <img src={props.photo ? props.photo : photoUser} className={s.user__avatar}/>
                </NavLink>


                {
                    props.follow ?
                        <button disabled={props.followingInProgress.some(id => id === props.id)}
                                onClick={onFollowHandler} className={`${s.user__follow} ${s.active}`}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === props.id)}
                                  onClick={onUnfollowHandler} className={s.user__follow}>Follow</button>
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