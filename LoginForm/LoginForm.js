import { useRef, useState } from "react";
import "./Login.css";
import User from "./User";



function LoginForm(){
    const [id, setId] = useState("");
    const onChangeId = (e) => { setId(e.target.value); }
    const [pw, setPw] = useState("");
    const onChangePw = (e) => { setPw(e.target.value); }
        
    const idInputRef = useRef();
    const pwInputRef = useRef();
    const LoginEx =() =>{
        if(!id){
            idInputRef.current.focus();
            return;
        } else if(!pw) {
            pwInputRef.current.focus();
            return;
        }
        const currentUser = User.find(user => user.id === id && user.pw === pw);
        if (currentUser) {
            alert(`Welcome ${currentUser.name}!`);
            setId("");
            setPw("")
        } else {
            alert('Failed to log in, please check your ID and password');
        }
    }
    const onKeyDown = (e) =>{
       if(e.keyCode === 13) {LoginEx()}
    }
    
    return (
        <div className="LoginForm">
            <h1>LoginForm<hr/></h1>
            <div className="InputIDPW">
                ID <input ref={idInputRef} value={id} onChange={onChangeId} placeholder="enter your id" onKeyDown={onKeyDown}/> <br/>
                PW <input ref={pwInputRef} value={pw} onChange={onChangePw} placeholder="enter your pw" onKeyDown={onKeyDown} type="password"/> <br/>
                <button onClick={LoginEx}>Login</button>
                <button>Registration</button>
            </div>
            
            <br/>
            

            
        </div>
    )
}

export default LoginForm;