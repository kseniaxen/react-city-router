import {Route, BrowserRouter, Switch} from "react-router-dom"
import NavBar from "./components/base/NavBar"
import Main from "./components/pages/Main"
import MainSight from "./components/pages/MainSight"
import Sights from "./components/pages/Sights"
import Photos from "./components/pages/Photos"
import Form from "./components/pages/Form"
function App() {
  return (
    <div>
      <h1>City Mariupol</h1>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/mainsight" component={MainSight} />
          <Route path="/sights" component={Sights} />
          <Route path="/photos" component={Photos} />
          <Route path="/form" component={Form} />
          <Route children={()=><h2>Error 404: Page Not Found</h2>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
