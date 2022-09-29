import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { AiFillPlusCircle, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import api from "../../api/api";

function EditItem() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useOutletContext();
  const {item} = location.state;
  const [itemname, setItemName] = useState(item.itemname);
  const [itemtype, setItemType] = useState(item.itemtype);
  const [customertype, setCustomerType] = useState(item.customertype);
  

  const [prices, setPrices] = useState(item.prices);

  const onChangePrice = (value, index, type) => {
    const k = [...prices];
    k[index][type] = value;
    setPrices(k);
  };
  const onAddPrice = () => {
    setPrices([
      ...prices,
      {
        id: uuidv4(),
        soldunit: '',
        unitprice: 0,
        ccy: "USD",
      },
    ]);
  };
  const onRemovePrice = (index) => {
    const k = [...prices];
    k.splice(index, 1);
    setPrices(k);
  };

  const toBack = () =>{
    navigate('/item/details',{state:{item}});
  }
  const onSave = async (e) => {
    e.preventDefault()
    const payload = {
      id: item.id,
      itemname,
      itemtype,
      customertype,
      prices: prices
    }
    await api.editItem(payload).then(res=>{
      if(res.status === 200){
        navigate('/')
      }
    });
  }
  if (user)
    return (
      <div className="additem all_margin">
        <form className="content" onSubmit={onSave}>
          <div className="action">
            <BiArrowBack onClick={toBack} className="backbtn"/>
            <button className="savebtn" type="submit">Save</button>
          </div>
          <div className="iteminfo">
            <label className="uploadphoto"><input style={{display: "none"}} type="file"></input></label>
            <div className="info">
              <input
                type="text"
                className="name"
                placeholder="Item Name"
                value={itemname}
                onChange={(e) => setItemName(e.target.value)}
              />
              <select
                name="itemtype"
                id="itemtype"
                value={itemtype}
                onChange={(e) => setItemType(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Item Type
                </option>
                <option value="Drink / Baverage">Drink / Baverage</option>
                <option value="Snack">Snack</option>
                <option value="Body / Facial Care">Body / Facial Care</option>
                <option value="Ingredient">Ingredient</option>
                <option value="Others">Others</option>
              </select>
              <select
                name="customertype"
                id="customertype"
                value={customertype}
                onChange={(e) => setCustomerType(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Customer Type
                </option>
                <option value="retailer">Retailer</option>
                <option value="end-consumer">End-Consumer</option>
              </select>
            </div>
          </div>
          <div className="table">
            <div className="header">
              <h3>Price Table</h3>
              <AiFillPlusCircle className="addbtn" onClick={onAddPrice} />
            </div>

            <table>
              <thead>
                <tr>
                  <th>Sold Unit</th>
                  <th>Unit Price</th>
                  <th>Currency</th>
                </tr>
              </thead>
              <tbody>
                 {prices.map((price, index) => (
                  <tr key={`${index}-price`}>
                    <td>
                      <input
                        type="text"
                        value={price.soldunit}
                        required
                        onChange={(e) =>
                          onChangePrice(e.target.value, index, "soldunit")
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={price.unitprice}
                        onChange={(e) =>
                          onChangePrice(e.target.value, index, "unitprice")
                        }
                      />
                    </td>
                    <td>
                      <select
                        name="ccy"
                        id="ccy"
                        value={price.ccy}
                        onChange={(e) =>
                          onChangePrice(e.target.value, index, "ccy")
                        }
                      >
                        <option value="" disabled selected hidden></option>
                        <option value="usd">USD</option>
                        <option value="khr">KHR</option>
                      </select>
                    </td>
                    <td>
                      {index !== 0 && (
                        <AiFillCloseCircle
                          onClick={() => onRemovePrice(index)}
                        />
                      )}
                    </td>
                  </tr>
                ))} 
              </tbody>
            </table>
          </div>
        </form>
      </div>
    );
}

export default EditItem;
