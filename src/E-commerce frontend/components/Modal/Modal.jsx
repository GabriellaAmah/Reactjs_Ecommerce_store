import React from "react";
import { Button, Modal } from "react-bootstrap";
import './modal.css'

const ModalBox = ({ show, onHide, cartMethod, product }) => {
  return (
    <div>
      <div className='modal'>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          show={show}
          onHide={onHide}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>

          <div className="d-flex flex-column justify-content-center align-content-center text-center">
            <div>
              <h6 className="text-center"> {product.name}</h6>
              <img src={product.image} alt="product" width="20%" />
              <h4>{product.description}</h4>
            </div>
          </div>

          <Modal.Footer>
            <Button onClick={() => cartMethod(product._id)}>Add to cart</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ModalBox;
