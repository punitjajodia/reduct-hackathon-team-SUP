import './App.css';
import {useEffect, useState} from 'react';
import{useNavigate} from "react-router-dom";

function Home({db, setDb}) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(db.current_login) {
      setTimeout(() => {
        navigate("/campaigns")
      }, 5 * 1000)
    }
  }, [db])

 

  const login = () => {
    const account = db.admin_accounts.find(account => {
      return account.email === email
    });

    if(account) {
      setDb({
        ...db,
        current_login: {
          email: email,
          type: "employer"
        }
      })
    } else {
      alert("Oh no");
    }
  }

  console.log(db.current_login);

  if(db.current_login) {
    return <div>Welcome back {db.current_login.email}</div>
  }
  
  
  
  return(
    <div className="App"> 
      <header className="App-header">
         <div>  Enter your email address to login to your account </div>
         <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
         <button onClick = {login}>Login</button>
      </header>
    </div>
  );
}

export default Home;
