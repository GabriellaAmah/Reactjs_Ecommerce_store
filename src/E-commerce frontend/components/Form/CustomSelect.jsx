import React from "react";
import { Form } from "react-bootstrap";

const CustomSelect = ({ value, name, onChange }) => {
  return (
    <div>
      <Form.Label className="my-11 mr-2">Category</Form.Label>
      <Form.Control as="select" onChange={onChange} name={name} value={value} className="my-1 mr-sm-2" custom>
        <option value="shoe">Shoe</option>
        <option value="bag">bag</option>
        <option value="watch">watch</option>
        <option value="coat">coat</option>
        <option value="scarf">scarf</option>
        <option value="lingerie">lingerie</option>
      </Form.Control>
    </div>
  );
};

export default CustomSelect;
