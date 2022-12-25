import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/MasterLayout/Master-Layout";
import LazyLoader from "../components/MasterLayout/Lazy-Loader";
const New = lazy(()=>import("../components/New/New"))

const NewPage = () => {
    return (
        <Fragment>
            <MasterLayout>
              <Suspense fallback={<LazyLoader/>}>
                  <New></New>
              </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default NewPage;