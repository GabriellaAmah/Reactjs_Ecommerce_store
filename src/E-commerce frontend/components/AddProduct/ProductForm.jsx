import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import CustomSelect from "../Form/CustomSelect";
import FilePicker from "../Form/filePicker";
import Input from "../Form/input";
import ExploreButton from "../Buttton/button";
import "./productForm.css";
import { AdminContext } from "../../Context/Admin/adminState";
import { useContext } from "react";
import generateBase64 from "../../utils/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductForm = (props) => {
  const { postProduct } = useContext(AdminContext);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  const [file, setFile] = useState("");

  const { name, price, description, category } = product;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFile = (e) => {
    const { files } = e.target;
    if (files) {
      generateBase64(files[0])
        .then((base64) => {
          console.log("base 64 has been generated");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setFile(files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct(product, file)
      .then(() => props.history.push("/sucess"))
      .catch(() => toast("products was not added. try again"));
  };

  return (
    <div className="formArea">
      <ToastContainer />
      <Form method="post"  onSubmit={handleSubmit}>
        <Col xs="auto">
          <Input
            label="product name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="name of product...."
          />

          <CustomSelect
            name="category"
            value={category}
            onChange={handleChange}
          />

          <Input
            label="price"
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            placeholder="price of product.."
          />

          <Input
            label="description"
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="product description"
          />

          <FilePicker name="file" label="product Image" onChange={handleFile} />
        </Col>

        <ExploreButton type="submit" text="enter" classname="bg-dark" />
      </Form>
    </div>
  );
};

export default ProductForm;
