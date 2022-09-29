import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useOutletContext } from "react-router-dom";
import { AiFillPlusCircle, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import api from "../../api/api";

function AddItem() {
  const navigate = useNavigate();
  const [user, setUser] = useOutletContext();
  const [itemname, setItemName] = useState("");
  const [itemtype, setItemType] = useState("");
  const [customertype, setCustomerType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [image, setImage] = useState(null);

  const changeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const [prices, setPrices] = useState([
    {
      soldunit: "",
      unitprice: 0,
      ccy: "USD",
    },
  ]);

  const onChangePrice = (value, index, type) => {
    const k = [...prices];
    k[index][type] = value;
    setPrices(k);
  };
  const onAddPrice = () => {
    setPrices([
      ...prices,
      {
        soldunit: "",
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

  const toBack = () => {
    navigate("/");
  };
  const onSave = async () => {
    const item = {
      itemname,
      itemtype,
      customertype,
      prices: prices,
    };

    await api.addItem(item, selectedFile).then((res) => {
      if (res.status === 200) {
        navigate("/");
      }
    });
  };
  if (user)
    return (
      <div className="additem all_margin">
        <div className="content">
          <div className="action">
            <BiArrowBack onClick={toBack} className="backbtn" />
            <span onClick={onSave} className="savebtn">
              Save
            </span>
          </div>
          <div className="iteminfo">
            
              <label className="uploadphoto">
                {image && <img src={image} />}
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={changeHandler}
                ></input>
              </label>
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
                <option value="Retailer">Retailer</option>
                <option value="End-consumer">End-Consumer</option>
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
        </div>
      </div>
    );
}

export default AddItem;
