import s from './Dialogs.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage:ProfilePageType
    addPost: (message: string) => void
}

function Profile(props: PropsType) {
    return (
        <div>
           <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile