import React, {Fragment, useEffect} from "react";
import {Container} from "react-bootstrap";
import {AiOutlineCalendar, AiOutlineDelete} from "react-icons/all";
import {AiOutlineEdit} from "react-icons/ai";
import {TaskListByStatus} from "../../APIRequest/APIRequest";
import {useSelector} from "react-redux";
import {DeleteTodo} from "../../helper/DeleteAlert";
import {UpdateTodo} from "../../helper/UpdateAlert";


const New = () => {

    const NewList = useSelector((state)=>state.task.New);
    //Load New task data
    useEffect(()=>{
        TaskListByStatus("New")
    },[]);

    //delete item
    const DeleteItem = (id)=>{
        // alert function
          DeleteTodo(id).then(result=>{
                if (result===true){
                    TaskListByStatus("New")
                }
            });
    }

    //update item
    const StatusChangeItem=(id,status)=>{
         UpdateTodo(id,status)
             .then(result=>{
                 if(result===true){
                     TaskListByStatus("New")
                 }
             })
    }

    return (
        <Fragment>
            <Container fluid={true} className="content-body">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 col-lg-8 px-3">
                        <h5> New Task </h5>
                    </div>
                    <div className="col-12 float-end col-md-6 col-lg-4 px-2">
                        <div className="row">
                            <div className="col-8">
                                <input className="form-control w-100"/>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary w-100">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row p-0 m-0">
                    {
                        NewList.map((item,i)=>

                            <div key = {i.toString()} className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
                            <div className="card h-100 border-2">
                                <div className="card-body">
                                    <h6 className="animated fadeInUp">{item.Title}</h6>
                                    <p className="animated fadeInUp">{item.Description}</p>
                                    <p className="m-0 animated fadeInUp p-0">
                                        <AiOutlineCalendar/>
                                        <a onClick={()=>StatusChangeItem(item._id,item.Status)} className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                                        <a onClick={DeleteItem.bind(this,item._id)} className="icon-nav text-danger mx-1 " ><AiOutlineDelete /></a>
                                        <a  className="badge float-end bg-info">{item.Status}</a>
                                    </p>
                                </div>
                            </div>
                        </div>)
                    }
                    )
                </div>
            </Container>
        </Fragment>
    );
};

export default New;