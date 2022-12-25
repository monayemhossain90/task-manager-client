import React, {useRef} from 'react';
import {ErrorToast, IsEmpty, IsNotEmail, IsNotMobile} from "../../helper/FormHelper";
import {RegistrationRequest} from "../../APIRequest/APIRequest";
import {useNavigate} from "react-router-dom";

const Registration = () => {
    let firstNameRef,lastNameRef,emailRef,mobileRef,passwordRef = useRef();
    let navigate = useNavigate();
    //registration handler function
    const onRegistration = ()=>{
        let Email = emailRef.value;
        let FirstName = firstNameRef.value;
        let LastName = lastNameRef.value;
        let Mobile = mobileRef.value;
        let Password = passwordRef.value;
        let Photo  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAXVBMVEX////7+/sfHx8zMzMKCgoRERHr6+sAAAD29vYGBgZYWFhRUVG0tLQnJyeDg4NwcHBKSkqMjIyWlpalpaXy8vK8vLzW1tbf399kZGTGxsbk5OSsrKx2dnY/Pz/T09Pd4TUVAAAEO0lEQVRIx4VXiZarIAwFV1DctWpd/v8zX1gMgTrnOVNrlZCbm1XG3g7xmc4+kSUcMunP6SPYHwcP/xn/jHWSleTIknr88JelThzPYtmSR0hmmXyuk20R0Wq3HXzcraXKja6m74ZJLYuahq5vDI68WnioKMS/dlpUpqdaiZViVWeqIeTdGgHl7g+uVKpX1EfxS0xx1HrfVKFMeMwtPJa9EiwyypGhetCetzMl6uGu2OBZM87szSjzcx4b2H0rfhV/K0BV3x4U/y7TOE7Llyy8a1BQfXERt98FyMrOGzurzXHcbGpGK4sOblYRJ/MG7mkFqt0rEiV5tSPBooUH2xy4u5Wl1LKOmzExgZleV2qCNBn9M5CWLbVZAc8dsjzr3fN6+hTzXHwmHTYWlZEXnSxzhcHFVvBvXSDxAKO8FEaJUJeWRmVFDf5e0Q8d+OhGGEf+MEo9kR/I2g0e6569lryUI3r8gUGThyqDGyMAXxws2LefUU0LMD5x8nxAWYs35x6wiUfxQwD8f2HZ8OjwKTDAll/8pUWMag4urgXeP2SZrCQ83cWalPLwSQ9mbAZRUmaHXwbkVTyMP33JwbbO23FkZaJtG4GLApNE9BY1j0sM4O59jhfA6mgRnB6hvjsxmooO9/TosEycxlZALZVfUzTGNl+eCBcNSQhlcE9Z2awvmhmtbvzRjDSsTZlNWn8vMIeJzTysCaHNZt3Jes0isQ7ZDsu0ZZt7o2FdzxJk16rWtq20qvPAz7gtIEmYJDaaJGi8r7gvc0+EPRRoDiQrDdn8QWRj+2YsZPymsW1OCrSCcLYE9RKzijjLZRUnN5fMCxOUQT5zms/U707YxAih57WS6LIVNAsD2xJGm52tkHn11DDdZ7JTUNO4IyzB9PWetdWzjKonbTDMuqq3qcZpwxV7XQZHvQvGQg+YIDkx7FBUmYYYHHlt2wZ+bHi6xPA0umaRp3XXDkPb1alt99VO/WwTQxcSX8HYPGhzs2vYi4e+Yh8uvV8yzJ40m5KkGOgNK+AnMxhpSs2qBnFZrQjbFgNXhqzi+9Ld/xAh+Ub/oaeG6w7LkCklLl/uVDfvlZY/Uj91809vF4WA+g5K73r5Phud+BM71xqUXiz6M0RwNkSpSKOKD7qzz7arun7j2g0foEdDFL5MdriZbuND0G5co9uTZ2DgAVoqroePZPeNjrsWu2+uCLxg9hmni8K20xZr8r/JDaKfVsGjfACladBvzVhhO0LEMI/9rR1c+rFCf5n8117nLJIhaW4vxrKkAw13o5SmmiYO/2Fbu+aUwShl4Wgnd0VUNPnPjIlDXDA46CIn65vSzOM4oeNj2PzJ4Brs6k84uGLP8SvdyLyIYKDGNfHIHM0d8bBOqQ+GdR7CchloXxOyt9eEzL0mhKEfsP7/F5RYKWO+zf331SgMo9/U//uljIZeKEU2/Pt1MPDfP6G6PD0VoCwnAAAAAElFTkSuQmCC";

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
            RegistrationRequest(Email,FirstName,LastName,Password,Photo, Mobile)
                .then(result=>{
                    if (result===true){
                        navigate("/login")  //redirect to login page
                    }
                })
        }
    }
    return (
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Sign Up</h4>
                            <hr/>
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>

                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>

                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>

                                    <div className="col-md-4 p-2">
                                        <label>Mobile Number</label>
                                        <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>

                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input  ref={(input)=>passwordRef = input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                </div>

                                <div className="row mt-2 p-0">
                                    <div className="col-md-4 p-2">
                                        <button onClick={onRegistration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Register</button>
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

export default Registration;