import React, {Fragment, useRef} from 'react';
import {ErrorToast, IsNotEmail} from "../helper/FormHelper";
import {RecoverVerifyEmailRequest} from "../APIRequest/APIRequest";

const SendOtpPage = () => {
    let emailRef = useRef();
    //email handler
    const verifyEmail =()=>{
        let Email = emailRef.value;
        if (IsNotEmail(Email)){
            ErrorToast("Write a valid email address")
        }
        else {
        //    api request function here
            RecoverVerifyEmailRequest(Email)
                .then(result=>{

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
                              <h4> Email Address</h4>
                              <br/>
                              <label className="text-lg"> Your email address</label>
                              <input ref={(input)=>emailRef = input} type="email" className="form-control animated fadeInUp" placeholder="User Email"/>
                              <br/>
                              <button onClick={verifyEmail} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </Fragment>
    );
};

export default SendOtpPage;