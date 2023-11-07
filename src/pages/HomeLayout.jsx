import { Fragment } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <Fragment>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </Fragment>
  );
};

export default HomeLayout;
