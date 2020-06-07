import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import {
  Button,
  Card,
  Container,
  Dimmer,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Loader,
  Message,
  Segment,
  Select,
  Divider
} from "semantic-ui-react";
import { productDetailURL } from "../constants";

class ProductDetail extends React.Component {
  state = {
    loading: false,
    error: null,
    formVisible: false,
    data: [],
    formData: {}
  };

  componentDidMount() {
    this.handleFetchItem();
  }

  handleToggleForm = () => {
    const { formVisible } = this.state;
    this.setState({
      formVisible: !formVisible
    });
  };

  handleFetchItem = () => {
    const {
      match: { params }
    } = this.props;
    this.setState({ loading: true });
    axios
      .get(productDetailURL(params.productID))
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  handleFormatData = formData => {
    // convert {colour: 1, size: 2} to [1,2] - they're all variations
    return Object.keys(formData).map(key => {
      return formData[key];
    });
  };

  handleChange = (e, { name, value }) => {
    const { formData } = this.state;
    const updatedFormData = {
      ...formData,
      [name]: value
    };
    this.setState({ formData: updatedFormData });
  };

  render() {
    const { data, error, formData, formVisible, loading } = this.state;
    const product = data;
    return (
      <Container>
        {error && (
          <Message
            error
            header="There was some errors with your submission"
            content={JSON.stringify(error)}
          />
        )}
        {loading && (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
            <Image src="/images/wireframe/short-paragraph.png" />
          </Segment>
        )}
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Card
                fluid
                image={product.image}
                header={product.name}
                description={product.description}
              />
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default ProductDetail;
