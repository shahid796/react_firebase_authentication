import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth'
import {auth} from './firebase-config'

function App() {
  const[useremail,setuseremail]=useState('')
  const[userpassword,setuserpassword]=useState('')
  const[logiuseremail,setloginuseremail]=useState('')
  const[loginpassword,setloginpassword]=useState('')

  const [user,setuser]=useState({})

  const signup=async()=>{
    try{
      const user=await createUserWithEmailAndPassword(auth,useremail,userpassword)
      console.log(user)
      alert("registerd successfully")
    }catch(error){
      console.log(error)
      alert(error.message)
    }
   
  }
  onAuthStateChanged(auth,(currentuser)=>{
      setuser(currentuser)
  })
  const logout=async()=>{
    await signOut(auth)
  }
  const login=async()=>{
    try{
      const luser= await signInWithEmailAndPassword(auth,logiuseremail,loginpassword)
      console.log(luser)
    }catch(error){
       console.log(error)
    }
  }



  return (
    <div className="App">
        <div className="App">
      <h1>sign up</h1>
     <div>
       <label>useremail</label>
       <input type="text" placeholder='enter your mail id' value={useremail} onChange={(e)=>{setuseremail(e.target.value)}} />
     </div>
     <div>
       <label>password</label>
       <input type="text" placeholder='enter your password'  value={userpassword} onChange={(e)=>{setuserpassword(e.target.value)}} />
     </div>
     <button onClick={signup}>register</button>
     <h1>login</h1>
     <div>
       <label>useremail</label>
       <input type="text" placeholder='enter your registered mail id' value={logiuseremail} onChange={(e)=>{setloginuseremail(e.target.value)}}/>
     </div>
     <div>
       <label>password</label>
       <input type="text" placeholder='enter your valid password' value={loginpassword} onChange={(e)=>{setloginpassword(e.target.value)}} />
     </div>
     <button onClick={login}>login</button><br/><br/>
     <div>
       <p>{user?.email}</p>
       <button onClick={logout}>signout</button>
     </div>
    </div>
    </div>
  );
}

export default App;
