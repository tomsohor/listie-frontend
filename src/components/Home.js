import React from 'react'
import { MdOutlineOtherHouses } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { IoDuplicate } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import coca from "../img/coca.jpg"

function Home() {
    return ( 
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
                <div className="item_container">
                    <span className="pre"><GrPrevious/></span>
                    <div className="items">
                        <div className="item">
                            <span className="tag"></span>
                            
                            <p className="name">
                                coca
                            </p>
                            <div className='img'>
                            <img 
                            // src={"../image/coca.jpg" }
                            src={coca}
                            alt="" />
                            </div>
                            
                            <div className="action">
                                <IoDuplicate/>
                                <BiDetail/>
                                <AiTwotoneDelete/>
                            </div>
                        </div>

                        <div className="item">
                            <span className="tag"></span>
                            
                            <p className="name">
                                coca
                            </p>
                            <div className='img'>
                            <img 
                            // src={"../image/coca.jpg" }
                            src={coca}
                            alt="" />
                            </div>
                            
                            <div className="action">
                                <IoDuplicate/>
                                <BiDetail/>
                                <AiTwotoneDelete/>
                            </div>
                        </div>
                        <div className="item">
                            <span className="tag"></span>
                            
                            <p className="name">
                                coca
                            </p>
                            <div className='img'>
                            <img 
                            // src={"../image/coca.jpg" }
                            src={coca}
                            alt="" />
                            </div>
                            
                            <div className="action">
                                <IoDuplicate/>
                                <BiDetail/>
                                <AiTwotoneDelete/>
                            </div>
                        </div>
                        <div className="item">
                            <span className="tag"></span>
                            
                            <p className="name">
                                coca
                            </p>
                            <div className='img'>
                            <img 
                            // src={"../image/coca.jpg" }
                            src={coca}
                            alt="" />
                            </div>
                            
                            <div className="action">
                                <IoDuplicate/>
                                <BiDetail/>
                                <AiTwotoneDelete/>
                            </div>
                        </div>
                        <div className="item">
                            <span className="tag"></span>
                            
                            <p className="name">
                                coca
                            </p>
                            <div className='img'>
                            <img 
                            // src={"../image/coca.jpg" }
                            src={coca}
                            alt="" />
                            </div>
                            
                            <div className="action">
                                <IoDuplicate/>
                                <BiDetail/>
                                <AiTwotoneDelete/>
                            </div>
                        </div>
                        <div className="item">
                            <span className="tag"></span>
                            
                            <p className="name">
                                coca
                            </p>
                            <div className='img'>
                            <img 
                            // src={"../image/coca.jpg" }
                            src={coca}
                            alt="" />
                            </div>
                            
                            <div className="action">
                                <IoDuplicate/>
                                <BiDetail/>
                                <AiTwotoneDelete/>
                            </div>
                        </div>
                    </div>
                    
                    <span className="next"><GrNext/></span>
                </div>
               
            </div>
        </div>
     );
}

export default Home;
