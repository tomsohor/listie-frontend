import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useOutletContext } from "react-router-dom";

function AddItem() {
  const [user, setUser] = useOutletContext();
  if (user)
    return (
      <div className="additem all_margin">
        <div className="content">
          <div className="action">
            <BiArrowBack />
            <span>Save</span>
          </div>
          <div className="iteminfo">
            <div className="uploadphoto">dfs</div>
            <div className="info">
              <input type="text" className="name" placeholder="Item Name" />
              <select name="itemtype" id="itemtype">
                <option value="" disabled defaultValue hidden>
                  Item Type
                </option>
                <option value="Drink / Baverage">drink / baverage</option>
                <option value="Snack">Snack</option>
                <option value="Body / Facial Care">Body / Facial Care</option>
                <option value="Ingredient">Ingredient</option>
                <option value="Others">Others</option>
              </select>
              <select name="customertype" id="customertype">
                <option value="" disabled defaultValue hidden>
                  Customer Type
                </option>
                <option value="retailer">retailer</option>
                <option value="end-user">end-user</option>
              </select>
            </div>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Sold Unit</th>
                  <th>Unit Price</th>
                  <th>Currency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default AddItem;
