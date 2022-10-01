import React from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import api from "../../api/api";

function DupItem() {
  const navigate = useNavigate();
  const [user, setUser] = useOutletContext();
  const location = useLocation();
 
  const toBack = () =>{
    navigate('/');
  }
 
  const onDuplicate = async(item) =>{
    item.itemname = item.itemname + ' Copy'
    console.log(item)
    await api.addItem(item).then(res=>{
      if(res.status === 200){
        navigate('/')
      }
    });
  }
  
  if (user)
    return (
      <div className="dupitem all_margin">
        <div className="content">
          <h3>Do you want to duplicate?</h3>
          <div className="action">
            <span className="no" onClick={toBack}>No</span>
            <span className="yes" onClick={()=>onDuplicate(location.state.item)}>Yes</span>
          </div>
        </div>
      </div>
    );
}

export default DupItem;
