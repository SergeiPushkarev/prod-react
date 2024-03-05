import { Suspense, useEffect } from "react";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])
  
  return (
    <div className="app">
      <Suspense fallback="">
        <NavBar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
} 

export default App