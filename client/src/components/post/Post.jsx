import { Link } from 'react-router-dom';
import './post.css'

export default function Post({ post }) {
    const PF = "https://reactblogxd.herokuapp.com/images/";
    return (
        <div className='post'>
            {post.photo && (
                <img
                    className='postImg'
                    src={PF + post.photo} alt=""
                />
            )}
            <div className='postInfo'>
                <div className="postCats">{
                    post.categories.map(c => (
                        <span className="postCat">{c.name}</span>
                    ))
                }
                </div>
                <span className='postTitle'>
                    <Link className="link" to={`/post/${post._id}`}>{post.title}</Link>
                </span>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='postDesc'>
                {post.desc}
            </p>
        </div >
    );
}
