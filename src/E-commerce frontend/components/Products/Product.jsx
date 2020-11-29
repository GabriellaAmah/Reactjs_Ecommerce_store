import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ products, idName , response}) => {
  return (
    <div>
      {products.length <= 0 ? (
        <h2 className= 'p-3'>{response}</h2>
      ) : (
        <div id={idName}>
          {products.map((product) => {
            return (
              <div key={product._id} id="storeItems" data-group="shoe">
                <div className="card item ">
                  <div className="image-area">
                    <Link to={`/product/detail/${product._id}`}>
                      <img
                        className="img-responsive img-fluid card-img-top"
                        id="storeImages"
                        src={product.image}
                        alt="a shop product"
                      />
                    </Link>
                  </div>
                  <div className="text-area card-body">
                    <h5>{product.name}</h5>
                    <h5>
                      $<span className="itemAmount">{product.price}</span>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Product;
