import React from "react";
import { Route, NavLink } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Paw, Magnify, Heart, Settings } from "mdi-material-ui";
// import MdPaw from 'react-ionicons/lib/MdPaw';
// import MdSettings from 'react-ionicons/lib/MdSettings';
// import MdSearch from 'react-ionicons/lib/MdSearch';
// import MdHeart from 'react-ionicons/lib/MdHeart';

import "./styles.scss";
import { SearchScreen, EngageScreen, MyPetsScreen, SettingsScreen } from "../../screens";

class NavigationButton extends React.Component {
  render() {
    return (
      <div className='navigation-button'>
        {this.props.children}
      </div>
    );
  }
};

class NavigationFooter extends React.Component {
  render() {
    return (
      <div className="screen">
        <Container fixed style={{height:"100%"}}>
          <Route path="/search" component={SearchScreen}></Route>
          <Route path="/engage" component={EngageScreen}></Route>
          <Route path="/my-pets" component={MyPetsScreen}></Route>
          <Route path="/settings" component={SettingsScreen}></Route>

        </Container>
        <div className="footer-navigation">
          <NavigationButton>
            <NavLink activeClassName="selected" to="/search">
              <Magnify />
            </NavLink>
          </NavigationButton>
          <NavigationButton>
            <NavLink activeClassName="selected" to="/engage">
              <Heart />
            </NavLink>
          </NavigationButton>
          <NavigationButton>
            <NavLink activeClassName="selected" to="/my-pets">
              <Paw />
            </NavLink>
          </NavigationButton>
          <NavigationButton>
            <NavLink activeClassName="selected" to="/settings">
              <Settings />
            </NavLink>
          </NavigationButton>
        </div>
      </div>
    );
  }
}

export default NavigationFooter;
