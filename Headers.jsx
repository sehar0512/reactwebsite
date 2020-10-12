import React from 'react';
// import { NavLink } from 'react-router-dom';
import bg from '../src/images/bg.jpg';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
function Headers() {
    return (
        <>
        <div >
    <Layout >
        <Header   id='nav' transparent title="AKS Cosmetics" style={{backgroundColor:'black'}}>
            <Navigation>
            <NavLink activeClassName="menu_active" exact to="/">Home</NavLink>
                <NavLink activeClassName="menu_active" exact to="/blog">Blogs</NavLink>
                <NavLink activeClassName="menu_active" exact to="/contact">Contact</NavLink>
            </Navigation>
        </Header>
        <Drawer title="AKS Cosmetics">
            <Navigation>
            <NavLink activeClassName="menu_active" exact to="/">Home</NavLink>
                <NavLink activeClassName="menu_active" exact to="/blog">Blogs</NavLink>
                <NavLink activeClassName="menu_active" exact to="/contact">Contact</NavLink>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content">
            <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/blog" component={Blog}></Route>
      <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
            </div>
        </Content>
    </Layout>
</div>
        {/* <div className="demo-big-content" style={{height: '60vh', position: 'relative'}}>
    <Layout >
        <Header transparent title="AKS Cosmetics" scroll style={{color: 'palevioletred'}}>
            <Navigation id="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blogs</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Navigation>
        </Header>
        <Drawer title="AKS Cosmetics">
            <Navigation>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blogs</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Navigation>
        </Drawer>
        <Content>
        <div>
        <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/blog" component={Blog}></Route>
      <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        </div>
        </Content>
    </Layout>
</div> */ }
        </>
    );
}
export default Headers;