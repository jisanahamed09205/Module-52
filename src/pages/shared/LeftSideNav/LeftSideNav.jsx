import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [newsCategory,setNewsCategory] = useState([]);

    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setNewsCategory(data))
    },[])
    // console.log(newsCategory);

    return (
        <div className="space-y-4">
            <h2 className="text-2xl">All Categories</h2>
            {
                newsCategory.map(category => <NavLink 
                    to={`/category/${category.id}`}
                    className=" block ml-4 text-xl font-semibold"
                    key={category.id}
                    >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;