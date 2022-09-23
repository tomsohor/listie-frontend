import React, { useState } from 'react'
import Search from './sub/Search';
import CustomerType from './sub/CustomerType';
import api from '../api/api';

import { MdOutlineOtherHouses } from "react-icons/md";
import { IoDuplicateOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import coca from "../img/coca.jpg"
import { useEffect } from 'react';

function Home() {
    const [data,setData]=useState();
    
    useEffect(()=>{
       const fetchData = async()=>{
        const dataset = await api.getAllData();
        setData(dataset.data); 
       }
       fetchData()
    },[]);
    if (data) {
        return ( 
            <div>
               
            <div className="container all_margin">
                <Search/>
                <CustomerType/>
                
            <div className="main">
                <div className="gt">
                    <h2>Grand Total</h2>
                    <p>150 items</p>
                </div>
                <div className="itemtype">
                    <div className='typename'>
                        <div className='name'>
                            <h3>Drink</h3>
                            <p>150 items</p>
                        </div>
                        <MdOutlineOtherHouses className='more'/>
                    </div>
                    <div className="items">
                    {data.map((item) =>( 
                        <div className="item" key={item.id}>
                            <span className={"tag "+item.customertype}></span>
                            
                            <a href='#' className="name">
                                {item.itemname}
                            </a>
                            <div className='img'>
                            <img 
                            // src={"../image/coca.jpg" }
                            src={coca}
                            alt="" />
                            </div>
                            
                            <div className="action">
                                <IoDuplicateOutline/>
                                
                                <RiDeleteBin6Line/>
                            </div>
                        </div>
                        
                        ))}
                    </div>
                    {/* <div className="paging">
                        <span className="pre"><GrPrevious/></span>
                        <span className="next"><GrNext/></span>
                    </div> */}
                   
                </div>
            </div>
            </div>
            </div>
         );
    }
    
}

export default Home;
