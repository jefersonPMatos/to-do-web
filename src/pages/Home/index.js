import { BrowserRouter as Router, Link } from "react-router-dom";


import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
 
export function Home(){
    return (
        <div>
            <Title>Home</Title>  
            <Button><Link to="/login" style={{ textDecoration: 'none' }}> Login</Link></Button>
            <Button><Link to="/Cadastrar" style={{ textDecoration: 'none' }}> Cadastra-se</Link></Button>       
        </div>
    )   
}
