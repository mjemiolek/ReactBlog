import Post from '../post/Post'
import './posts.css'

export default function Posts({ posts }) {
    return (
        <div className='posts'>
            {posts.map(p => (
                <Post post={p} />
            ))}
            {/* <Post postAdress="/post/123" title="Title Ipsum dolores amatores" time="1 hour ago" description="Lorem ipsum ipsum ipsum psum psum psu m um um u msu m sum usm su msu msu m sum su msu msu msu msu mum ek=kzuja jdskadj ijwi" />
            <Post postAdress="/post/321" title="Title Ipsum dolores amatores" time="1 hour ago" description="Lorem ipsum ipsum ipsum psudfsdgsdfsdfsdfm psum psu m um um u msu m sum usm su msu msu m sum su msu msu msu msu mum ek=kzuja jdskadj ijwi" />
            <Post postAdress="/post/121" title="Title Ipsum dolores amatores" time="1 hour ago" description="Lorem ipsum asdasdasdasdasdipsum ipsum psum psum psu m um um u msu m sum usm su msu msu m sum su msu msu msu msu mum ek=kzuja jdskadj ijwi" />
            <Post postAdress="/post/222" title="Title Ipsum dolores amatores" time="1 hour ago" description="Lorem ipsum ipsum ipsum pdgfsfgsdfgdsfgsum psum psu m um um u msu m sum usm su msu msu m sum su msu msu msu msu mum ek=kzuja jdskadj ijwi" />
            <Post postAdress="/post/333" title="Title Ipsum dolores amatores" time="1 hour ago" description="Lorem ipsum ipsumdfgsdfgsfgsdfgdafgfafgfafgsgbsfgangthrgefsdhgretsdfag ipsum psum psum psu m um um u msu m sum usm su msu msu m sum su msu msu msu msu mum ek=kzuja jdskadj ijwi" />
            <Post postAdress="/post/666" title="Title Ipsum dolores amatores" time="1 hour ago" description="Lorem ipsum ipsum ipsum psum psgngbfgdsFdfdkudhgjfhyrhjhkdyurytsGfshargum psu m um um u msu m sum usm su msu msu m sum su msu msu msu msu mum ek=kzuja jdskadj ijwi" />
             */}
        </div>
    )
}
