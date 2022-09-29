import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";


function ItemDetails() {
  const navigate = useNavigate();
  const [user] = useOutletContext();
  const location = useLocation();
  const {item} = location.state;

  const toBack = () =>{
    navigate('/');
  }

  const toEdit = () =>{
    navigate('/item/edit',{state:{item}})
  }

  if (user)
    return (
      <div className="additem all_margin">
        <div className="content">
          <div className="action">
            <BiArrowBack onClick={toBack} className="backbtn"/>
            <span className="savebtn" onClick={toEdit}>Edit</span>
          </div>
          <div className="iteminfo">
            <label className="uploadphoto">dfs</label>
            <div className="info">
              <span className="name" >{item.itemname}</span>
              <span className="name">{item.itemtype}</span>
              <span className="name">{item.customertype}</span>
            </div>
          </div>
          <div className="table">
            <div className="header">
              <h3>Price Table</h3>
             
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
                 {item.prices.map((price, index) => (
                  <tr key={`${index}-price`}>
                    <td>
                      <span>{price.soldunit}</span>
                      
                    </td>
                    <td>
                    <span>{price.unitprice}</span>
                    </td>
                    <td>
                    <span>{price.ccy}</span>
                     
                    
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

export default ItemDetails;
