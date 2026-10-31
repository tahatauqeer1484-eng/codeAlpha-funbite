import {useState} from "react";
  function Signup(){
const [name,setName] = useState("");
const [email,setEmail] =useState("");
const [password, setPassword] = useState("");
  function handleSubmit(e){
    e.preventDefault();
    console.log(name,email,password);
  }
  
    return(
        <div className="sign-page">
        <div className="signup-box">
         <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
         <label>Full Name</label>
        <input type="text" placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <label>Emai Address</label>

        <input type="email" placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
            <label>Password</label>
            <input type="password" placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        <button type="submit">Sign Up</button>
</form>
     </div>
</div>
    );
}
export default Signup;