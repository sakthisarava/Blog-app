import './singlePost.css'

 function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src="./images/4.jpg" alt="" />
                <h1 className='singlePostTitle'>
                 This is the best blog app
                 <div className="singlePostEdit">
                 <i className="singlePostIcon far fa-edit"></i>
                 <i className="singlePostIcon far fa-trash-alt"></i>
                 </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Girish&Sakthi</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    you are looking into the single post section.You can edit or delete here
                </p>
            </div>
        </div>
    )
}

export default SinglePost;
