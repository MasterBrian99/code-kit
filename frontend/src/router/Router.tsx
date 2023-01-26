import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import { routes } from './routes';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<MainScreen></MainScreen>} />
          <Route path="category/:key" element={<CategoryScreen />}></Route>
          {routes.map((el) => (
            <Route key={el.key} path={el.key}>
              {el.element.map(({ component: Component, key }) => (
                <Route key={key} path={key} element={<Component />} />
              ))}
            </Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import MainLayout from '../layout/MainLayout';
// import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
// import MainScreen from '../screens/MainScreen/MainScreen';
// import { routes } from './routes';
// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route path="category/:key" element={<CategoryScreen />}></Route>
//           {routes.map((el) => (
//             <Route key={el.key} path={el.key}>
//               {el.element.map(({ component: Component, key }) => (
//                 <Route key={key} path={key} element={<Component />} /> // warning
//               ))}
//             </Route>
//           ))}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;
