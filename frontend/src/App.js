import { BrowserRouter, Switch } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Index from "./pages/index";
import Management from "./pages/management/index";
import Mapa from "./pages/management/vehicular";
import Report from "./pages/report/index";
import Administration from "./pages/administration/index";
import CreateDriver from "./pages/administration/create-driver";
import { AuthRoute, LogRoute } from "./components/Auth/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/" exact component={Index} />
        <AuthRoute path="/management/vehicular" exact component={Mapa} />
        <AuthRoute path="/management" exact component={Management} />
        <AuthRoute path="/report" exact component={Report} />
        <AuthRoute path="/administration" exact component={Administration} />
        <AuthRoute
          path="/administration/create-driver"
          exact
          component={CreateDriver}
        />
        <LogRoute path="/signin" exact component={Signin} />
        <LogRoute path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
