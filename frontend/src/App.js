import { BrowserRouter, Switch } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Index from "./pages/index";
import { AuthRoute, LogRoute } from "./components/Auth/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/" exact component={Index} />
        <LogRoute path="/signin" exact component={Signin} />
        <LogRoute path="/signup" exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
