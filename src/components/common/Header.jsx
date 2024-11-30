
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';
import { useState} from "react";

function Header(props) {
  let getUserLoginData =  ()=>{
    //read data from local storage
    let token = localStorage.getItem("Zomato Final Restaurants");

   if(token == null){
    return false;
   }else {
 //decode a jwt token
 try {
let result =  jwtDecode(token);
 return result;
 } catch (error) {
  //remove a token from localStorange
  localStorage.removeItem("Zomato Final Restaurants");
  return false;
 }
}
    
  };
  let [user, setUser] = useState(getUserLoginData());
  console.log(user);
  let onSuccess = (response) => {
   let token = response.credential; //JSON WEB TOKEN

   //localStorage => 5m to 10mb
   //store
   localStorage.setItem('Zomato Final Restaurants',token);
  alert("Login in successfully");
   window.location.assign("/");
  }
  let onError = () => {
    console.log('Login Failed');
  };
let logout = () =>{
 let doLogout = window.confirm("Are you sure you want to logout?");//yes=> true, candel=> false
 if (doLogout === true ){
  localStorage.removeItem("Zomato Final Restaurants");
  window.location.assign("/");
}
};
// console.log(user.email.split("@"));
  return (
    <>

<GoogleOAuthProvider clientId="1047762093142-hqb3kbls1dpb2oells6rrm08fargdsei.apps.googleusercontent.com">
<div className="modal fade"
 id="google-login" 
 tabIndex="-1" 
 aria-labelledby="exampleModalLabel" 
 aria-hidden="true"
 >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5"
    
    id="exampleModalLabel">
         Login
          </h1>
        <button 
        type="button" 
        className="btn-close"
         data-bs-dismiss="modal"
          aria-label="Close">
  </button>
      </div>
      <div className="modal-body">
      <GoogleLogin onSuccess={onSuccess} onError={onError}/>
      </div>
      
    </div>
  </div>
</div>
      <div className={`row ${props.bg} justify-content-center`}>
        <div className="col-11 d-flex justify-content-between align-items-center py-2">
       

        {props.bg ?  <p className="m-0 brand">e!</p> : <p></p>}
          <div>
          {user === false ?  ( <button
           className="btn btn-outline-light"
            data-bs-toggle="modal" 
            data-bs-target = "#google-login"
            >
              Login
            </button>
          ) : (
            <>
          <span className='fw-bold text-white'>
            Welcome, {user.email.split("@")[0]}
            {/* Welcome, {user.name} */}
            </span>
            <button 
            onClick={logout}
             className='btn btn-outline-light ms-3 btn-sm'
             >
              Logout</button>
          </>
          )}
            {/* <button className="btn btn-outline-light">
              <i className="fa fa-search" aria-hidden="true"></i>Create a
              Account
            </button> */}
          </div>
        </div>
      </div>
      </GoogleOAuthProvider>
    </>
  );
}

export default Header;
