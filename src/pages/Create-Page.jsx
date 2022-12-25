import React, {Fragment, lazy,Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout";
import LazyLoader from "../components/MasterLayout/Lazy-Loader";
const Create = lazy(()=>import("../components/Create/Create"));

const CreatePage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Create/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default CreatePage;