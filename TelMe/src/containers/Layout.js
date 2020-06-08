import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button,
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

class CustomLayout extends React.Component {
  state = { activeItem: window.location.pathname };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { authenticated } = this.props;
    const { activeItem } = this.state;

    return (
      <div>
        <Segment inverted vertical>
          <Menu inverted secondary pointing>
            <Container>
              <Menu.Item
                header
                href="/"
                active={activeItem === "/"}
                onClick={this.handleItemClick}
                name="/"
              >
                TelMe
              </Menu.Item>
              <Menu.Item
                as="a"
                href="#"
                active={activeItem === "new"}
                onClick={this.handleItemClick}
                name="new"
              >
                What's New
              </Menu.Item>
              <Menu.Item
                as="a"
                href="/products"
                active={activeItem === "/products"}
                onClick={this.handleItemClick}
                name="/products"
              >
                Products
              </Menu.Item>
              <Menu.Item
                as="a"
                href="#"
                active={activeItem === "/compare"}
                onClick={this.handleItemClick}
                name="/compare"
              >
                Compare
              </Menu.Item>
              {authenticated ? (
                <React.Fragment>
                  <Menu.Menu position="right">
                    <Menu.Item header onClick={() => this.props.logout()}>
                      Logout
                    </Menu.Item>
                  </Menu.Menu>
                </React.Fragment>
              ) : (
                <Menu.Menu position="right">
                  <Button as="a" inverted href="/login">
                    Login
                  </Button>
                  <Button
                    href="/signup"
                    as="a"
                    inverted
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Menu>
              )}
            </Container>
          </Menu>
        </Segment>

        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 1" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 2" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 3" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Footer Header" />
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size="mini" src="/logo.png" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomLayout)
);
