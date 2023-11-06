import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const HomeLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </Fragment>
  );
};

export default HomeLayout;
