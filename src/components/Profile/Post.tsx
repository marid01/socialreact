
const Post = (props: any) => {
    return (
        <div>
            {
                props.message
            }
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post