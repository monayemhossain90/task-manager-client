import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout";
import LazyLoader from "../components/MasterLayout/Lazy-Loader";
const Progress = lazy(()=>import("../components/Progress/Progress"));

const ProgressPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Progress/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default ProgressPage;