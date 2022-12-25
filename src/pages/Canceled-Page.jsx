
import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout";
import LazyLoader from "../components/MasterLayout/Lazy-Loader";
const Canceled = lazy(()=> import("../components/Canceled/Canceled"))

const CanceledPage = () => {
    return (
        <Fragment>
            <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Canceled> </Canceled>
            </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CanceledPage;