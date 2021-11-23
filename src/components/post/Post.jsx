import './post.css'

 function Post() {
    return (
        <div className='post'>
            <img className="postImg" src="./images/4.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    this is the best blog app 
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>
              You are now looking into the best blog app
            </p>
        </div>
    )
}

export default Post;
