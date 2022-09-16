import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

function Search() {
    return ( 
      <div className="search_container">
        <div className="searchbox">
            <div className="search">
                <span className="icon">
                        <BsSearch/>
                </span>
                <input type="text" className='inputbox' placeholder='Search'/>
            </div>
                
            <AiFillPlusCircle className='addbtn'/>
            </div>
        </div>
     );
}

export default Search;