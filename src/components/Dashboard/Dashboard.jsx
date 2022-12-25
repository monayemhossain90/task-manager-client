import React, {Fragment, useEffect} from 'react';
import { SummaryRequest} from "../../APIRequest/APIRequest";
import {useSelector} from "react-redux";

const Dashboard = () => {
    useEffect(()=>{
        SummaryRequest();
    },[]);
    const summaryList = useSelector((state)=>state.summary.value)

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {
                        summaryList.map((item,i)=>
                            <div key={i.toString()} className="col-12 col-lg-3 col-md-4 col-sm-6 p-2">
                                <div className="card h-100 border-2">
                                    <div className="card-body">
                                        <h5 className="animated fadeInUp">Total {item._id} </h5>
                                        <h6 className="text-secondary animated fadeInUp"> {item.sum} </h6>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Fragment>

    );
};

export default Dashboard;