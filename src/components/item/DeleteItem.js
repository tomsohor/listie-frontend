import React from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import api from "../../api/api";

function DeleteItem() {
  const navigate = useNavigate();
  const [user, setUser] = useOutletContext();
  const location = useLocation();
  const toBack = () =>{
    navigate('/');
  }
  const onDelete = async(id) =>{
    await api.deleteItem(id).then(res=>
      {
        if (res.status ===200){
          navigate('/')
        }
      });
  }
  if (user)
    return (
      <div className="deleteitem all_margin">
        <div className="content">
          <h3>Do you want to delete?</h3>
          <div className="action">
            <span className="no" onClick={toBack}>No</span>
            <span className="yes" onClick={()=>onDelete(location.state.id)}>Yes</span>
          </div>
        </div>
      </div>
    );
}

export default DeleteItem;
