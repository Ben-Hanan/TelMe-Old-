import React from "react";
import axios from "axios";
import {
  Button,
  Container,
  Icon,
  Image,
  Item,
  Label,
  Segment,
  Loader,
  Dimmer,
  Message,
} from "semantic-ui-react";
import { productListURL } from "../constants";

class ProductList extends React.Component {
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

  render() {
    const { data, error, loading } = this.state;
    return (
      <Container>
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
        <Item.Group divided>
          {data.map(product => {
            return <Item key={product.id}>
              <Item.Content>
                <Item.Header as="a"
                as="a"
                onClick={() =>
                  this.props.history.push(`/products/${product.id}`)
                }
                >
                  {product.name}
                </Item.Header>
                <Item.Meta>
                  <span className="cinema">{product.telco}</span>
                </Item.Meta>
                <Item.Description>{product.description}</Item.Description>
                <Item.Extra>
                  <Button primary floated="right" icon labelPosition="right">
                    Like
                    <Icon name="right arrow" />
                  </Button>
                  <Label>{product.category}</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          })}

        </Item.Group>
      </Container>
    );
  }
}

export default ProductList;
