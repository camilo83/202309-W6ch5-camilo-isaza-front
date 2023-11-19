import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../../pages/home/homePage'));
const Elements = lazy(() => import('../../pages/elements/elementsPage'));
const Error = lazy(() => import('../../pages/elements/elementsPage'));
const Details = lazy(() => import('../../pages/details/detailsPage'));
const Create = lazy(
  () => import('../../pages/create_element/createElementPage')
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
        </Routes>
      </Suspense>
    </main>
  );
}
