import s from "./user.module.scss"

type UserType = {
    name: string
    email: string
    country: string
    follow: boolean
    avatar: string
}

export const User = (props: UserType) => {

    return (
        <div className={s.user__wrap}>

            <div className={s.user__avatarWrap}>
                <img src={props.avatar} className={s.user__avatar}/>

                {
                    props.follow ?
                        <span className={`${s.user__follow} ${s.active}`}>Unfollow</span>
                        : <span className={s.user__follow}>Follow</span>
                }

            </div>

            <div className={s.user__content}>
                <div>
                    <span className={s.user__name}>{props.name}</span>

                    <div className={s.user__statusWrap}>
                        <span className={s.user__statusTitle}>Status:</span>
                        <p className={s.user__statusText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Atque commodi consequatur cum eaque, eum facere maxime minus
                            nesciunt officia optio possimus praesentium, provident quae
                            quasi recusandae repellat sunt vero vitae.
                        </p>
                    </div>
                </div>

                <div className={s.user__about}>
                    <div className={s.user__aboutWrap}>
                        <span className={s.user__aboutTitle}>Email:</span>
                        <span className={s.user__aboutText}>{props.email}</span>
                    </div>

                    <div className={s.user__aboutWrap}>
                        <span className={s.user__aboutTitle}>Country:</span>
                        <span className={s.user__aboutText}>{props.country}</span>
                    </div>
                </div>


            </div>


        </div>
    )
}