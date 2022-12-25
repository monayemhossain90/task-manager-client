    import React, {Fragment ,Suspense, lazy } from 'react';
    import MasterLayout from "../components/MasterLayout/Master-Layout";
    import LazyLoader from "../components/MasterLayout/Lazy-Loader";
    const Dashboard = lazy(()=> import("../components/Dashboard/Dashboard"))

const DashboardPage = () => {
    return (
        <Fragment>
        <MasterLayout>
            <Suspense fallback={<LazyLoader/>}>
                <Dashboard></Dashboard>
            </Suspense>
        </MasterLayout>
        </Fragment>
    );
};

export default DashboardPage;