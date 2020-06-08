import React, { Component, Fragment } from "react";
import { Form } from "semantic-ui-react";

class Filter extends Component {
  // state = { telco: "", Category: "", Contract: "" };

  // handleChange = (e, { name, value }) => this.setState({ [name]: value });

  // handleSubmit = () => {
  //   //need to provide logic of what happens when you submit
  //   const { name, email } = this.state;

  //   this.setState({ submittedName: name});
  // };

  render() {
    // const { name, email, submittedName, submittedEmail } = this.state;
    return (
      <Form /*onSubmit={this.handleSubmit}*/>
        <Form.Group widths="equal">
          <Form.Field label="Telco:" control="select">
            {/* feel free to remove this placeholder (--) if you find it appropriate to */}
            <option>--</option>
            <option value="Starhub">Starhub</option>
            <option value="Singtel">Singtel</option>
            <option value="M1">M1</option>
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field label="Category:" control="select">
            <option>--</option>
            <option value="Prepaid">Prepaid</option>
            <option value="Postpaid">Postpaid</option>
            <option value="pay-as-you-go">Pay-as-you-go</option>
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field label="Contract:" control="select">
            <option>--</option>
            <option value="6months">6 Months</option>
            <option value="1year">1 Year</option>
            <option value="2years">2 Years</option>
            <option value=">2years">More than 2 Years</option>
          </Form.Field>
        </Form.Group>
        {/* These are some alternative ways of showing options. 
    If you decide to filter by user selection of checkboxes we can use this */}
        {/* 
    <Form.Group grouped>
      <label>Category</label>
      <Form.Field
        label="This one"
        control="input"
        type="radio"
        name="htmlRadios"
      />
      <Form.Field
        label="That one"
        control="input"
        type="radio"
        name="htmlRadios"
      />
    </Form.Group>
    <Form.Group grouped>
      <label>Contract Length</label>
      <Form.Field label="This one" control="input" type="checkbox" />
      <Form.Field label="That one" control="input" type="checkbox" />
    </Form.Group> */}
        <Form.Field label="Find my plan!" control="button">
          Go
        </Form.Field>
      </Form>
    );
  }
}

export default Filter;
