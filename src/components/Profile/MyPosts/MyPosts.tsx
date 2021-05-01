

function MyPosts(props: any) {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'It\' my first post', likesCount: 11},
    ]
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