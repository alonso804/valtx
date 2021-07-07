import { BrowserRouter, Switch } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Index from "./pages/index";
import Vehicular from "./pages/vehicular";
import Reports from "./pages/reports";
import Setting from "./pages/setting/index";
import CreateSetting from "./pages/setting/create-setting";
import { AuthRoute, LogRoute } from "./components/Auth/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/" exact component={Index} />
        <AuthRoute path="/vehicular" exact component={Vehicular} />
        <AuthRoute path="/reports" exact component={Reports} />
        <AuthRoute path="/setting" exact component={Setting} />
        <AuthRoute path="/create-setting" exact component={CreateSetting} />
        <LogRoute path="/signin" exact component={Signin} />
        <LogRoute path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
