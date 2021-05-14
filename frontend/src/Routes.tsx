import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//function NavBar() { declarar a função de outro modo
const Routes = () => { //Essa função é com o Lambda
    return (
        <BrowserRouter>
            <Switch>     
                <Route path="/" exact> 
                    <Home />
                </Route>
                <Route path="/dashboard">  
                    <Dashboard />
                </Route>

            </Switch>
        </BrowserRouter> //componente
    );
}

export default Routes;