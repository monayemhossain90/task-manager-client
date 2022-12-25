import React, {Fragment,Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import LazyLoader from "../components/MasterLayout/Lazy-Loader";

const ForgetPassPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <ForgetPassword></ForgetPassword>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ForgetPassPage;