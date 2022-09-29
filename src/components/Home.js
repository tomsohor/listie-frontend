import React, { useState } from "react";
import Search from "./sub/Search";
import api from "../api/api";

import { MdOutlineOtherHouses } from "react-icons/md";
import { IoDuplicateOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import coca from "../img/coca.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  //filter by customer type
  const [filter,setFilter] = useState({state:false,type:''});
  const toDelete = (id) => {
    navigate("/item/delete", { state: { id } });
  };

  const toDuplicate = (item) => {
    navigate("/item/duplicate", { state: { item } });
  };

  const getDetails = async (id) => {
    await api.getItemDetails(id).then((res) => {
      if (res.status === 200) {
        const item = res.data.item;
        item.prices = res.data.prices;
        navigate("/item/details", { state: { item } });
      }
    });
  };

  const onCustomerType = async(type) =>{
    if(type === 'x'){
        setFilter(f => ({
            ...f,
            state:false,
            type:''
        }))
        await getAllData();
    }
    if(type === 'retailer'){
        setFilter(f => ({
            ...f,
            state:true,
            type:'retailer'
        }))
        const retailers = data.filter(item => item.customertype === 'retailer')
        setData(retailers)
    }
    if(type === 'end-consumer'){
        setFilter(f => ({
            ...f,
            state:true,
            type:'end-consumer'
        }))
        const endUser = data.filter(item => item.customertype === 'end-consumer')
        setData(endUser)

    }
  }

  const getAllData = async() => {
    const dataset = await api.getAllData();
      setData(dataset.data);
      
  }

  useEffect(() => {
    getAllData();
  }, []);
  if (data) {
    return (
      <div>
        <div className="container all_margin">
          <Search />
          <div className="ctype_container">
            <div className="customertype">
            { filter.state === true && <span className="x" onClick={()=>onCustomerType('x')}>X</span>}
              {filter.type !== 'end-consumer' && <span className="retailer" onClick={()=>onCustomerType('retailer')}>Retailer</span>}
              
              { filter.type !== 'retailer' && <span className="end-consumer" onClick={()=>onCustomerType('end-consumer')}>End Consumer</span>}
              
            </div>
          </div>

          <div className="main">
            <div className="gt">
              <h2>Grand Total</h2>
              <p>{data.length} items</p>
            </div>
            
            <div className="itemtype">
              <div className="typename">
                <div className="name">
                  <h3>Drink</h3>
                  <p>150 items</p>
                </div>
                <MdOutlineOtherHouses className="more" />
              </div>
              <div className="items">
                {data.map((item) => (
                  <div className="item" key={item.id}>
                    <span className={"tag " + item.customertype}></span>

                    <span className="name">
                      <span className="nametooltip">{item.itemname}</span>
                      <span onClick={() => getDetails(item.id)}>
                        {item.itemname}
                      </span>
                    </span>
                    <div className="img">
                      <img
                        // src={"../image/coca.jpg" }
                        src={coca}
                        alt=""
                      />
                    </div>

                    <div className="action">
                      <IoDuplicateOutline onClick={() => toDuplicate(item)} />
                      <RiDeleteBin6Line onClick={() => toDelete(item.id)} />
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
