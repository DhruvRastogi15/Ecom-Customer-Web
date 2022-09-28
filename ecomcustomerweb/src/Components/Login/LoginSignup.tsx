import React,{useState,useEffect} from "react";
import Button from '@mui/material/Button';

const LoginSignup = () => {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        alert('a')
    },[])

    function showAlert(): void {
        setCount(count+1)
        // throw new Error("Function not implemented.");
    }

    return(
        // <h1>Hello Dhruv</h1>
        <div>
            <Button onClick={()=>showAlert()} variant="contained">Hello Prateek</Button>
            <h1>{count}</h1>
        </div>
    )
}

export default LoginSignup;


