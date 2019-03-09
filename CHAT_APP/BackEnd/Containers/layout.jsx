import React, { Component } from 'react';
//import Header from "./Components/Header";
import {Container,Row} from "reactstrap";
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import PublicChat from "../Components/PublicChat";
import RoomChat from "../Components/RoomChat";





class layout extends Component {
  render() {
    return (
      <React.Fragment>
        
        <Container>

        <Row>
          <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PublicChat}></Route>
                <Route path="/RoomChat" component={RoomChat}></Route>             
            </Switch>
            </BrowserRouter>
        </Row>



        </Container>



      </React.Fragment>
    );
  }
}

export default layout;