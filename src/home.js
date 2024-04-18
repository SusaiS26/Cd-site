import React, { useEffect } from 'react'
import { Link, useNavigate, } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/Login');
    }, []);


  return (
    <div>
      
    </div>
  )
}

export default Home
