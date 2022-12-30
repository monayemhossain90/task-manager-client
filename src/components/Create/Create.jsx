import React, {useRef} from 'react';
import { Container, Row} from "react-bootstrap";
import {ErrorToast, IsEmpty} from "../../helper/FormHelper";
import {NewTaskRequest} from "../../APIRequest/APIRequest";
import {useNavigate} from "react-router-dom";


const Create = () => {
     let titleRef, descriptionRef = useRef();
     let navigate = useNavigate();
    const createNew = ()=>{
            let title = titleRef.value;
            let description = descriptionRef.value;
            if (IsEmpty(title)){
                ErrorToast("Title Required");
            }
            else if (IsEmpty(description)){
                ErrorToast("Description Required");
            }

            else{
                    NewTaskRequest(title,description)
                        .then(res=>{
                            if (res===true){
                                   navigate("/all")
                            }
                        })
            }
    }

    return (
        <Container fluid={true} className=""content-body>
            <Row className="d-flex justify-content-center">
                <div className="col-12 col-lg-8 col-md-8 col-sm-12 p-2">
                    <div className="card">
                        <div className="card-body">
                            <h4>Create New Task</h4>
                            <br/>
                            <input ref={(input)=>titleRef = input} type="text" placeholder="Task Name" className="form-control animated fadeInUp"/>
                            <br/>
                            <textarea ref={(input)=>descriptionRef=input} className="form-control animated fadeInUp"  rows="5" placeholder="Task Description"></textarea>
                            <br/>
                            <button onClick={createNew} className="btn btn-primary float-end"> Create </button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Create;