import React from 'react';
import { useNavigate } from 'react-router-dom';


function Logo() {
    const navigate = useNavigate();
    const toHome = () =>{
        navigate('/')
    }
    return ( 
        <span className='logoContainer'  onClick={toHome}>
            <span className='l'>L</span>
            <span className='i1'>I</span>
            <span className='s'>s</span>
            <span className='t'>t</span>
            <span className='i2'>I</span>
            <span className='e'>E</span>
        </span>
     );
}

export default Logo;
