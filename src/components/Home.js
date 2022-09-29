import React, { useState } from 'react'
import Search from './sub/Search';
import CustomerType from './sub/CustomerType';
import api from '../api/api';

import { MdOutlineOtherHouses } from "react-icons/md";
import { IoDuplicateOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import coca from "../img/coca.jpg"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [data,setData]=useState();
    const navigate = useNavigate();
    const toDelete = (id) =>{
        navigate('/item/delete', {state:{id}})
    }

    const toDuplicate = (item) =>{
        navigate('/item/duplicate',{state:{item}})
        
    }

    const getDetails = async(id) =>{
        await api.getItemDetails(id).then(res=>{
            if(res.status===200){
                const item = res.data.item;
                item.prices = res.data.prices
                navigate('/item/details',{state:{item}})
            }
        })
    }
   
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
                            
                            <span className="name">
                                <span className='nametooltip'>{item.itemname}</span>
                                <span onClick={() => getDetails(item.id)}>{item.itemname}</span> 
                                
                            </span>
                            <div className='img'>
                            <img 
                            // src={"../image/coca.jpg" }
                            src={coca}
                            alt="" />
                            </div>
                            
                            <div className="action">
                                <IoDuplicateOutline onClick={() => toDuplicate(item)}/>
                                <RiDeleteBin6Line onClick={()=>toDelete(item.id)}/>
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
