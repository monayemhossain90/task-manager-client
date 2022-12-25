import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout";
import LazyLoader from "../components/MasterLayout/Lazy-Loader";
const NotFound = lazy(()=>import("../components/NotFound/NotFound"))

const Page404 = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <NotFound></NotFound>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default Page404;