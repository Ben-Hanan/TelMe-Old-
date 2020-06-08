import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Icon,
  Item,
  Label,
  Segment,
  Loader,
  Dimmer,
  Message,
  Rating,
  Grid,
  Header,
  Pagination,
} from "semantic-ui-react";
import { productListURL } from "../constants";
import Filter from "../components/Filter";
import singtel from "../images/Singtel.jpg";
import starhub from "../images/starhub.jpg";
import m1 from "../images/m1.jpg";

class ProductList extends Component {
  state = {
    loading: false,
    error: null,
    data: [],
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(productListURL)
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data, loading: false });
      })
      .catch((err) => {
        this.setState({ error: err, loading: false });
      });
  }

  getTelcoIconImage(telco) {
    switch (telco) {
      case "Singtel":
        return singtel;
      case "Starhub":
        return starhub;
      case "M1":
        return m1;

      default:
        break;
    }
  }

  render() {
    const { data, error, loading } = this.state;
    return (
      <Container style={{ marginTop: 15 }}>
        {error && (
          <Message
            error
            header="There was some errors with your submission"
            list={[
              "You must include both a upper and lower case letters in your password.",
              "You need to select your home country.",
            ]}
          />
        )}
        {loading === true && (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          </Segment>
        )}
        <Grid>
          <Grid.Column width={5}>
            <Header as="h3">Filter</Header>
            <Filter />
          </Grid.Column>
          <Grid.Column width={11}>
            <Item.Group divided>
              {data.map((product) => {
                return (
                  <Item key={product.id}>
                    <Item.Image
                      size="small"
                      src={this.getTelcoIconImage(product.telco)}
                    />

                    <Item.Content>
                      <Item.Header
                        as="a"
                        onClick={() =>
                          this.props.history.push(`/products/${product.id}`)
                        }
                      >
                        {product.name}
                      </Item.Header>
                      <Label style={{ marginLeft: 10 }}>
                        {product.contract}
                      </Label>
                      <Item.Meta>
                        <span className="cinema">{product.telco}</span>
                        <Rating
                          //icon="star"
                          defaultRating={4}
                          maxRating={5}
                          disabled
                        />
                      </Item.Meta>
                      <Item.Header as="h4">${product.price}</Item.Header>
                      <Item.Description>{product.description}</Item.Description>

                      <Item.Extra>
                        <Button
                          compact
                          circular
                          animated
                          color="blue"
                          href="#"
                          floated="right"
                          size="large"
                        >
                          <Button.Content visible>Site</Button.Content>
                          <Button.Content hidden>
                            <Icon name="arrow right" />
                          </Button.Content>
                        </Button>
                        <Button as="div" labelPosition="right" size="tiny">
                          <Button color="red" size="tiny">
                            <Icon name="heart" />
                            Like
                          </Button>
                          <Label as="a" basic color="red" pointing="left">
                            2,048
                          </Label>
                        </Button>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                  // <Item key={product.id}>
                  //   <Grid Container>
                  //     <Grid.Column width={5}>
                  //       <Image
                  //         size="small"
                  //         src={this.getTelcoIconImage(product.telco)}
                  //       />
                  //     </Grid.Column>

                  //     <Grid.Column width={10}>
                  //       <Header>{product.name}</Header>
                  //       <Label>{product.category}</Label>
                  //       <span className="cinema"> {product.telco}</span>
                  //       <Rating defaultRating={4} maxRating={5} disabled />
                  //       <Item.Description>
                  //         {product.description}
                  //       </Item.Description>
                  //       <Button as="div" labelPosition="right" size="tiny">
                  //         <Button color="red" size="tiny">
                  //           <Icon name="heart" />
                  //           Like
                  //         </Button>
                  //         <Label as="a" basic color="red" pointing="left">
                  //           2,048
                  //         </Label>
                  //       </Button>
                  //     </Grid.Column>

                  //     <Grid.Column width={2} floated="right"></Grid.Column>
                  //   </Grid>
                  //   <List link>
                  //     <List.Item
                  //       as="a"
                  //       onClick={() =>
                  //         this.props.history.push(`/products/${product.id}`)
                  //       }
                  //     >
                  //       More Details
                  //     </List.Item>
                  //     <List.Item>
                  //       <Button
                  //         compact
                  //         circular
                  //         animated
                  //         color="blue"
                  //         href="#"
                  //         fontSize="medium"
                  //       >
                  //         <Button.Content visible>Site</Button.Content>
                  //         <Button.Content hidden>
                  //           <Icon name="arrow right" />
                  //         </Button.Content>
                  //       </Button>
                  //     </List.Item>
                  //   </List>
                  // </Item>
                );
              })}
            </Item.Group>
            <Pagination
              defaultActivePage={1}
              firstItem={null}
              lastItem={null}
              pointing
              secondary
              totalPages={3}
            />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ProductList;
