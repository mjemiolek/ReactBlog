import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';
import './sidebar.css'

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axiosInstance.get("/categories")
            setCats(res.data);
        }
        getCats();
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, provident officiis.
                    Animi ipsam saepe eum harum laudantium debitis pariatur ab? Natus odit nulla, in explicabo
                    ratione itaque saepe sit facilis?
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div >
    )
}
