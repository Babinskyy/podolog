import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./Layouts/Layout";
import Home from "./Layouts/Pages/Home";
import Blog from "./Layouts/Pages/Blog";
import About from "./Layouts/Pages/About";
import Service from "./Layouts/Pages/Services";
import Contact from "./Layouts/Pages/Contact";
import SinglePost from "./Sections/SinglePost";
import ErrorPage from "./Components/Error";

// All external css
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/themify-icons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";

const App = (props) => {
  /**
   * IF, your wish to deploing this app in a SUB-DOMAIN -> Just replace `SUB_DOMAIN_HERE` with your sub-domain name
   * ELSE, replace the `SUBDOMAIN_HERE` with just a Backslash. E.g. "/SUB_DOMAIN_HERE/" ==> "/"
   *  */
  const basename = process.env.NODE_ENV === "development" ? "/" : "/";

  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/services" component={Service} exact />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:id" component={SinglePost} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Layout>
        <ToastContainer theme="colored" />
      </div>
    </BrowserRouter>
  );
};

export default App;
