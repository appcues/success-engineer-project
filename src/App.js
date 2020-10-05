import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Acct123 from "./Acct123";
import Account from "./Account";
import AccountSettings from "./AccountSettings";

// const App = () => (
//   <BrowserRouter>
//     <div>
//       <Navigation />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// );

class App extends React.Component {
  componentDidUpdate(prevProps) {


  console.log(prevProps+"test");
    const { location: { pathname } } = this.props;
    const previousLocation = prevProps.location.pathname;

    if (pathname !== previousLocation) {
      window.Appcues.page();
    }
  }
  render() {
    return (
      <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/account/acct123" component={Acct123} />
            <Route exact path="/account/acct123/accountsettings" component={AccountSettings} />
           </Switch>
        </div>
    )
  }
}

export default withRouter(App);
