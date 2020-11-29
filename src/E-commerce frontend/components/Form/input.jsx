import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  label,
  classname,
  type,
  name,
  value,
  placeholder,
  onChange,
  as
}) => {
  return (
    <div>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          className={classname}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          size="sm"
          as={as}
        />
      </Form.Group>
    </div>
  );
};

export default Input;
