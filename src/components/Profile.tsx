import React from "react";


type ProfileType = {
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className='content'>
            <div className='content__img'>
                <img src="https://kakoy-smysl.ru/wp-content/uploads/2020/02/grus-kart-so-sm-1-870x400.jpg"
                     alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>

                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>

        </div>
    )
}

export default Profile