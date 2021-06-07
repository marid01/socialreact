import s from './Dialogs.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

function Profile(props: any) {



    return (
        <div>
           <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile