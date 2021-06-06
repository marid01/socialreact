import Post from "../Post";


function MyPosts(props: any) {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);


    return (
        <div>
            My posts
           <div>
               <textarea></textarea>
               <button>Add post</button>
           </div>


        </div>
    )
}

export default MyPosts