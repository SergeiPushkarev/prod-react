import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

const App = () => {
   
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