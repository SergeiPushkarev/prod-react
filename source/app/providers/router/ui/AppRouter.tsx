import { Suspense } from 'react'
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>...Load</div>}>
      <Routes>
        {Object.values(routeConfig).map( ({element,path}) => (
          <Route key={path} path={path} element={
            <div className='page'>
              {element}
            </div>
          }/>
        ))
        }
      </Routes>
    </Suspense>
  );
};
export default AppRouter