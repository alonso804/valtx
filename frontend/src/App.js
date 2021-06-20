import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import Index from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} onEnter={requireAuth} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
