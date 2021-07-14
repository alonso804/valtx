import { BrowserRouter, Switch } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Index from "./pages/index";
import NotFound from "./pages/404";
import Management from "./pages/management/index";
import Mapa from "./pages/management/vehicular/[id]";
import Report from "./pages/report/index";
import Administration from "./pages/administration/index";
import CreateDriver from "./pages/administration/create-driver";
import EditDriver from "./pages/administration/edit-driver/[id]";
import { AuthRoute, LogRoute } from "./components/Auth/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute
          title="VTruck | Dashboard"
          path="/"
          exact
          component={Index}
        />
        <AuthRoute
          title="VTruck | Ubicación"
          path="/management/vehicular/:id"
          exact
          component={Mapa}
        />
        <AuthRoute
          title="VTruck | Gestión Vehicular"
          path="/management"
          exact
          component={Management}
        />
        <AuthRoute
          title="VTruck | Reportes"
          path="/report"
          exact
          component={Report}
        />
        <AuthRoute
          title="VTruck | Administración"
          path="/administration"
          exact
          component={Administration}
        />
        <AuthRoute
          title="VTruck | Crear conductor"
          path="/administration/create-driver"
          exact
          component={CreateDriver}
        />
        <AuthRoute
          title="VTruck | Editar conductor"
          path="/administration/edit-driver/:id"
          exact
          component={EditDriver}
        />
        <LogRoute path="/signin" exact component={Signin} />
        <LogRoute path="/signup" exact component={Signup} />
        <AuthRoute title="VTruck | 404 page" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
