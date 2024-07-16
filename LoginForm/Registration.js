import { useRef, useState } from "react";
import "./Registration.css";
import User from "./User";

function Registration({onCreate}){

    const [name, setName] = useState("");
    const onChangeName =(e) => { setName(e.target.value); }
    const [id, setId] = useState("");
    const onChangeId =(e)=> { setId(e.target.value); }
    const [pw, setPw] = useState("");
    const onChangePw =(e)=> { setPw(e.target.value); }
    const [pwCheck, setPwCheck] = useState("");
    const onChangePwCheck =(e)=>{ setPwCheck(e.target.value);}
    const [age, setAge] = useState("");
    const onChangeAge =(e)=> { setAge(e.target.value); }
    const [gender, setGender] = useState("");
    const onChangeGender =(e)=> { setGender(e.target.value); }
    


    const nameInputRef = useRef();
    const IdInputRef = useRef();
    const pwInputRef = useRef();
    const pwCheckInputRef = useRef();
    const ageInputRef = useRef();
    const genderInputRef = useRef();

    const btn_registr = () => {
        const currentUser = User.find(user => user.id === id);
        if(!name) { nameInputRef.current.focus(); alert("Please enter your name!"); return}
        else if(!id) {
            IdInputRef.current.focus();
            alert("Please enter your ID!");
            const currentUser = User.find(user => user.id === id);
            if(currentUser) {
                alert("이미 등록된 사용자입니다.");
            }
            return }
        else if(!pw) { pwInputRef.current.focus(); alert("Please enter your PW!"); return}
        else if(!pwCheck) { pwCheckInputRef.current.focus(); alert("Please enter your PW Check!"); return}
        else if(!age) { ageInputRef.current.focus(); alert("Please enter your age!"); return}
        else if(!gender) { genderInputRef.current.focus(); alert("Please select your gender!"); return}
        else if(!(pw==pwCheck)) {alert("The password check box is wrong");
            pwCheckInputRef.current.focus();return }
        onCreate(name, id, pw, age, gender);
        alert("Complete Registration!")
    }
 
    return (
        <div className="Registration">
            <h1>Registration<hr/></h1> 
            <div className="inputInfo">
                name : <input ref={nameInputRef} value={name} onChange={onChangeName}/><br/>
                id : <input ref={IdInputRef} value={id} onChange={onChangeId}/><br/>
                pw : <input ref={pwInputRef} value={pw} onChange={onChangePw} type="password"/><br/>
                pw check: <input ref={pwCheckInputRef} value={pwCheck} onChange={onChangePwCheck} type="password"/><br/>
                age : <input ref={ageInputRef} value={age} onChange={onChangeAge} type="number" min="0" max="100"/><br/>
                gender : <select ref={genderInputRef} value={gender} onChange={onChangeGender}>
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="W">FeMale</option>
                </select> <br/>
                {name}, {id}, {pw}, {age}, {gender}
            </div>
            <div className="btn_submit">
                <button onClick={btn_registr}>Registration</button>
            </div>
            
        </div>
    )
}

export default Registration;