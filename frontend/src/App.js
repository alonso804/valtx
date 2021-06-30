import { BrowserRouter, Switch } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Index from "./pages/index";
import Vehicular from "./pages/vehicular";
import Reports from "./pages/reports";
import Settings from "./pages/settings";
import { AuthRoute, LogRoute } from "./components/Auth/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/" exact component={Index} />
        <AuthRoute path="/vehicular" exact component={Vehicular} />
        <AuthRoute path="/reports" exact component={Reports} />
        <AuthRoute path="/settings" exact component={Settings} />
        <LogRoute path="/signin" exact component={Signin} />
        <LogRoute path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
