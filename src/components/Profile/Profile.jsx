import React, {useEffect, useRef} from 'react';
import {ProfileDetailsRequest, ProfileUpdateRequest} from "../../APIRequest/APIRequest";
import {useSelector} from "react-redux";
import {ErrorToast, getBase64, IsEmpty, IsNotEmail, IsNotMobile} from "../../helper/FormHelper";
import {useNavigate} from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate();

    // Load profile details
    useEffect(()=>{
        ProfileDetailsRequest()
    },[]);

    const ProfileData = useSelector((state)=>state.profile.value);

    let EmailRef,FirstNameRef,LastNameRef,MobileRef,PasswordRef,UserImgRef,UserImgView=useRef();

    //preview img handler
    const PreviewImgHandler =()=>{
        const imgFile = UserImgRef.files[0];
        getBase64(imgFile)
        .then((base64Img)=>{
           UserImgView.src = base64Img
        })
    }

    // Update profile handler
    const UpdateMyProfile =()=>{
        let Email = EmailRef.value;
        let FirstName = FirstNameRef.value;
        let LastName = LastNameRef.value;
        let Mobile = MobileRef.value;
        let Password = PasswordRef.value;
        let Photo = UserImgView.src ;

    //    Validation
        if(IsNotEmail(Email)){
            ErrorToast("Please Write a valid Email")
        }
        else if(IsEmpty(FirstName)){
            ErrorToast("Firstname is Required")
        }
        else if(IsEmpty(LastName)){
            ErrorToast("LastName is Required")
        }

        else if(IsNotMobile(Mobile)){
            ErrorToast("Valid Mobile No is required")
        }

        else if(IsEmpty(Password)){
            ErrorToast("Password is required")
        }

        else{
            ProfileUpdateRequest(Email,FirstName,LastName,Password,Photo, Mobile)
                .then(result=>{
                    if (result===true){
                        navigate("/")  //redirect to home page
                    }
                })
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <img  ref={(input)=>UserImgView=input} src={ProfileData["Photo"]} className="icon-nav-img-lg"  alt=""/>
                                <hr/>
                                <div className="row">
                                    <div className="col-md-4 p-2">
                                        <label>Profile Picture</label>
                                        <input key={Date.now()} onChange={PreviewImgHandler} ref={(input)=>UserImgRef=input}    placeholder="User Email" className="form-control animated fadeInUp" type="file"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input key={Date.now()} readOnly={true} ref={(input)=>EmailRef =input} defaultValue={ProfileData["Email"]} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input key={Date.now()} ref={(input)=>FirstNameRef = input} defaultValue={ProfileData["FirstName"]}  placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input key={Date.now()} ref={(input)=>LastNameRef =input} defaultValue={ProfileData["LastName"]} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Mobile</label>
                                        <input key={Date.now()} ref={(input)=>MobileRef =input} defaultValue={ProfileData["Mobile"]} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input key={Date.now()} ref={(input)=>PasswordRef = input} defaultValue={ProfileData["Password"]} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 p-2">
                                        <button onClick={UpdateMyProfile} className="btn w-100 float-end btn-primary animated fadeInUp">Update</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Profile;