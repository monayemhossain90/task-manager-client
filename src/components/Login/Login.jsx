import React, {Fragment, useRef} from 'react';
import {Link} from "react-router-dom";
import {ErrorToast, IsEmpty, IsNotEmail} from "../../helper/FormHelper";
import {LoginRequest} from "../../APIRequest/APIRequest";

const Login = () => {
    let emailRef,passRef =useRef();
    const loginSubmit = ()=>{
            let Email = emailRef.value;
            let Password = passRef.value;

              if (IsEmpty(Email)){
                  ErrorToast("Please write an email")
              }
            else if (IsNotEmail(Email)){
                    ErrorToast("Please Provide a valid Email")
            }

            else if (IsEmpty(Password)){
                    ErrorToast("Password is Empty")
            } else{
                  LoginRequest(Email,Password)
                      .then(result=>{
                          if (result===true){
                              window.location.href ="/"
                          }
                      })
            }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90 p-4">
                            <div className="card-body">
                                <h5 className="text-center">Sign In</h5>
                                <br/>
                                <input ref={(input)=>emailRef =input} type="email" placeholder="User Email" className="animated form-control fadeInUp"/>
                                <br/>
                                <input  ref={(input)=>passRef=input} type="password" placeholder="User Password" className="animated form-control fadeInUp"/>
                                <br/>
                                <button onClick={loginSubmit}  className="btn btn-primary float-end fadeInUp w-100"> Log In</button>
                                <div className="text-center w-100">
                                    <Link className="text-center animated fadeInUp" to="/registration"> Sign Up</Link>
                                    <br/>
                                    <Link className="text-center animated fadeInUp" to="/"> Forget Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;