import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../../pages/home/homePage'));
const Elements = lazy(() => import('../../pages/elements/elementsPage'));
const Error = lazy(() => import('../../pages/elements/elementsPage'));
const Details = lazy(() => import('../../pages/details/detailsPage'));
const Create = lazy(
  () => import('../../pages/create_element/createElementPage')
);
const Scientists = lazy(() => import('../../pages/scientists/scientistsPage'));
const ExperimentsLogin_Register = lazy(
  () => import('../../pages/login_reg_exp/login_reg_exp')
);
const ExperimentsLogin = lazy(() => import('../../pages/login_exp/login_exp'));
const ExperimentsRegister = lazy(() => import('../../pages/reg_exp/reg_exp'));
const ExperimentsForum = lazy(
  () => import('../../pages/experiments/experimentsPage')
);

export function Router() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/elements" element={<Elements></Elements>}></Route>
          <Route path="/*" element={<Error></Error>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/scientists" element={<Scientists></Scientists>}></Route>
          <Route
            path="/experiments/login-register"
            element={<ExperimentsLogin_Register></ExperimentsLogin_Register>}
          ></Route>
          <Route
            path="/experiments/login"
            element={<ExperimentsLogin></ExperimentsLogin>}
          ></Route>
          <Route
            path="/experiments/register"
            element={<ExperimentsRegister></ExperimentsRegister>}
          ></Route>
          <Route
            path="/experiments/forum"
            element={<ExperimentsForum></ExperimentsForum>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
