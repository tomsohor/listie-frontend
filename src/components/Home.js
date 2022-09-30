import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import Search from "./sub/Search";
import api from "../api/api";

import { MdOutlineOtherHouses } from "react-icons/md";
import { IoDuplicateOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [k, setK] = useState([]);

  const navigate = useNavigate();
  //filter by customer type
  const [filterType, setFilterType] = useState("x");
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

  const onCustomerType = async (type) => {
    if (type === "x") {
      setFilterType("x");
      await getAllData();
    } else {
      setFilterType(type);

      const filtered = {};
      Object.keys(k).forEach((x) => {
        filtered[x] = k[x].filter((y) => y.customertype === type);
      });
      setK(filtered);
    }
  };

  const getDataGroupByType = (data) => {
    const tmp = {};
    data.forEach((item) => {
      if (!tmp[item.itemtype]) {
        tmp[item.itemtype] = [item];
      } else {
        tmp[item.itemtype].push(item);
      }
    });
    return tmp;
  };

  const getAllData = async () => {
    const dataset = await api.getAllData();
    if (dataset.data && dataset.data instanceof Array) {
      const tmp = getDataGroupByType(dataset.data);

      setData(dataset.data);
      setK(tmp);
    }
  };

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
              {filterType !== "x" && (
                <span className="x" onClick={() => onCustomerType("x")}>
                  X
                </span>
              )}
              {filterType !== "End-consumer" && (
                <span
                  className="Retailer"
                  onClick={() => onCustomerType("Retailer")}
                >
                  Retailer
                </span>
              )}

              {filterType !== "Retailer" && (
                <span
                  className="End-consumer"
                  onClick={() => onCustomerType("End-consumer")}
                >
                  End Consumer
                </span>
              )}
            </div>
          </div>

          <div className="main">
            <div className="gt">
              <h2>Grand Total</h2>
              {data.length == 1 && <p>{data.length} item</p>}
              {data.length > 1 && <p>{data.length} items</p>}
            </div>
          
            {Object.keys(k).map((itemtype) => (
              <div className="itemtype">
                <div className="typename">
                  <div className="name">
                    <h3>{itemtype}</h3>
                    {k[itemtype].length == 1 && (
                      <p>{k[itemtype].length} item</p>
                    )}
                    {k[itemtype].length > 1 && (
                      <p>{k[itemtype].length} items</p>
                    )}
                  </div>
                  <MdOutlineOtherHouses className="more" />
                </div>
                <div className="items">
                  {k[itemtype].map((item) => (
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
                          src={`http://localhost:4000/uploads/${item.pic}`}
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
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
