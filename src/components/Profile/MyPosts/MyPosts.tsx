import React from 'react';
import Post from "../Post";
import {PostType} from "../../../redux/state";


type PropsType = {
    posts: Array<PostType>
    addPost: (message: string) => void
}

function MyPosts(props: PropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {

        let text = newPostElement.current!.value;
        props.addPost(text);
    }



    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts