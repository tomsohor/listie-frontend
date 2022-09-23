import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Search() {
    const navigate = useNavigate();

    const toItemAdd = async()=>{
        navigate('/item/add')
    }
    return ( 
      <div className="search_container">
        <div className="searchbox">
            <div className="search">
                <span className="icon">
                        <BsSearch/>
                </span>
                <input type="text" className='inputbox' placeholder='Search'/>
            </div>
                
            <AiFillPlusCircle className='addbtn' onClick={toItemAdd}/>
            </div>
        </div>
     );
}

export default Search;