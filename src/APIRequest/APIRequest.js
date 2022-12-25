import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import {HideLoader, ShowLoader} from "../redux/state-slice/Settings-Slice";
import store from "../redux/store/Store"
import {getToken, setToken, setUserDetails} from "../helper/SessionHelper";
import {setCanceledTask, setCompletedTask, setNewTask, setProgressTask} from "../redux/state-slice/Task-Slice";
import {setSummary} from "../redux/state-slice/Summary-Slice";
import {setProfile} from "../redux/state-slice/Profile-Slice";


const BaseUrl = "http://localhost:5000/api/v1";
const AxiosHeader = {headers:{"token":getToken()}};

// Login Request function
export function LoginRequest(Email,Password){
    store.dispatch(ShowLoader())  //   loader show
    let url = BaseUrl+"/login";
    let PostBody ={Email:Email,Password:Password}

    return axios.post(url,PostBody)
        .then(res=>{
            store.dispatch(HideLoader())
            if (res.status===200){
                setToken(res.data["token"])
                setUserDetails(res.data["data"]);
                SuccessToast("Login Success");
                return true
            }
            else{
                ErrorToast("Invalid email or password");
                return false
            }
        })
        .catch(err=>{
            store.dispatch(HideLoader())  //   loader hide
            ErrorToast("Something went wrong");
            return false
            }
        )
}

 // Registration Request function
 export  function RegistrationRequest(Email,FirstName,LastName,Password,Photo,Mobile){
      store.dispatch(ShowLoader())  //   loader show
  let url = BaseUrl+"/registration";
  let postBody = {
   Email:Email,
   FirstName:FirstName,
   LastName:LastName,
   Password:Password,
   Photo:Photo,
   Mobile:Mobile
  }

  return  axios.post(url,postBody)
       .then(res=>{
        store.dispatch(HideLoader())  //hide loader
        if (res.status===200){
           if (res.data["status"]==="Fail"){
                   if (res.data["data"]["keyPattern"]["Email"]===1){
                         ErrorToast("Email already used");
                         return false;
                        }
                 else{
                      ErrorToast("Something went wrong");
                      return false
                     }
                }
           else{
               SuccessToast("Registration Success");
               return true;
               }
        }
        else{
          ErrorToast("Something Went Wrong");
          return false;
        }
       })
       .catch(err=>{
           store.dispatch(HideLoader())  //   loader hide
         ErrorToast("Something went wrong");
         return false
       })

 }

// New Task Request Function
export function NewTaskRequest(title,description){
    store.dispatch(ShowLoader())    // loader show
    let url = BaseUrl+"/createTask";
    let PostBody ={Title:title,Description:description,Status:"New"};

    return axios.post(url,PostBody,AxiosHeader)
        .then(res=>{
            store.dispatch(HideLoader())
            if (res.status===200){

                SuccessToast("Create task Success");
                return true
            }
            else{

                ErrorToast("Something went wrong")
                return false
            }
        })
        .catch(err=>{

            store.dispatch(HideLoader())
            ErrorToast("catch error")
            return false
        })
}

// Task list by status function
export function TaskListByStatus(Status){
        store.dispatch(ShowLoader())
    let url = BaseUrl + "/listTaskByStatus/"+Status;

     axios.get(url,AxiosHeader)
         .then(res=>{
             store.dispatch(HideLoader());

             if (res.status===200){

                  if (Status==="New"){
                        store.dispatch(setNewTask(res.data["data"]))
                  }
                  else if(Status==="Completed"){
                      store.dispatch(setCompletedTask(res.data["data"]))
                  }
                  else if(Status==="Progress"){

                      store.dispatch(setProgressTask(res.data["data"]))
                  }
                  else if (Status==="Canceled"){
                      store.dispatch(setCanceledTask(res.data["data"]))
                  }
             }
             else {

                 ErrorToast("Something went wrong");
                 return false
             }
         })
         .catch(err=>{
             store.dispatch(HideLoader())
             ErrorToast("Catch went wrong");
             return false;
         })

    }

    // Summary Request
export function SummaryRequest(){
    store.dispatch(ShowLoader());
    let url = BaseUrl+"/taskStatusCount";
    axios.get(url,AxiosHeader)
        .then((res)=>{
            store.dispatch(HideLoader())
            if (res.status===200){
                console.log(res.data)
                store.dispatch(setSummary(res.data["data"]))
            }
            else{
                ErrorToast("Something went wrong")
            }
        })
        .catch((err)=>{
            store.dispatch(HideLoader())
            ErrorToast("catch  error")
        })

}

    // Task Delete Request
export function DeleteRequest(id){

    // store.dispatch(ShowLoader());
    let url = BaseUrl+ "/deleteTask/"+id;

    return axios.get(url,AxiosHeader)

        .then(res=>{

            // store.dispatch(HideLoader());
            if (res.status===200){

                SuccessToast("Delete Successful");
                return  true;
            }
           else{

               ErrorToast("Delete Failed");
               return false
            }
        })
        .catch(err=>{

            // store.dispatch(HideLoader())
            ErrorToast("catch err from delete function");
            return false
        })
}

// Update Task Status
 export const UpdateTaskStatusRequest =(id,status)=>{
     store.dispatch(ShowLoader());
    let url = BaseUrl+ "/updateTaskStatus/"+id+"/"+status;
    return axios.get(url,AxiosHeader)
        .then(res=>{
             store.dispatch(HideLoader());
            if (res.status===200){
                SuccessToast("Update Successful");
                return  true;
            }
            else{

                ErrorToast("Update Failed");
                return false
            }
        })
        .catch(err=>{
            store.dispatch(HideLoader())
            ErrorToast("catch err from Update function");
            return false
        })
}

// Profile Details Request
export const ProfileDetailsRequest = ()=>{
    store.dispatch(ShowLoader())
    let url = BaseUrl + "/profileDetails";

    axios.get(url,AxiosHeader)
        .then(res=>{
            store.dispatch(HideLoader());

            if (res.status===200){
                    store.dispatch(setProfile(res.data["data"][0]))
            }
            else {

                ErrorToast("Something went wrong");
                return false
            }
        })
        .catch(err=>{
            store.dispatch(HideLoader())
            ErrorToast("Catch  Error");
            return false;
        })
}

// Profile Update Request

export const ProfileUpdateRequest =(Email,FirstName,LastName,Password,Photo,Mobile)=>{
    store.dispatch(ShowLoader())  //   loader show
    let url = BaseUrl+"/profileUpdate";
    let postBody = {
        Email:Email,
        FirstName:FirstName,
        LastName:LastName,
        Password:Password,
        Photo:Photo,
        Mobile:Mobile
    };

    let UserDetails ={
        Email:Email,
        FirstName:FirstName,
        LastName:LastName,
        Photo:Photo,
        Mobile:Mobile
    }

    return  axios.post(url,postBody,AxiosHeader)
        .then(res=>{
            store.dispatch(HideLoader())  //hide loader

            if (res.status===200){
            SuccessToast("Profile Updated Successfully")
                setUserDetails(UserDetails);
            return true;
            }
            else{
                ErrorToast("Something Went Wrong");
                return false;
            }
        })
        .catch(err=>{
            store.dispatch(HideLoader())  //   loader hide
            ErrorToast("catch went wrong");
            return false
        })

}

// Recover password step-01 send otp
export function RecoverVerifyEmailRequest(Email){
    store.dispatch(ShowLoader());
    let url = BaseUrl+"/RecoverVerifyEmail/"+Email;
    return  axios.get(url,AxiosHeader)
        .then(res=>{
            store.dispatch(HideLoader())
            if (res.status===200){
            return true;
            }
            else{

            }
        })
        .catch(err=>{
            store.dispatch(HideLoader())
            ErrorToast("Catch error")
        })
}

