import React from "react";
import { useState } from "react";

import Button from "./Button";

function ProductDetails(props) {
  let [productCount, updateProductCount] = useState(0);

  function displayProductCount() {
    return productCount > 0 ? productCount : "0";
  }

  let badgeClass = "badge bg-" + (props.isAvailable ? "success" : "danger");

  // let productCountHandler = (btnID) => {
  //   const count = btnID === "1" ? --productCount : ++productCount
  //   updateProductCount(count)
  // };

  return (
    <>
      <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
      <p className="font-italic text-muted mb-0 small">{props.description}</p>
      <div className="d-flex align-items-center justify-content-start mt-1">
        <h6
          className="font-weight-bold my-2"
          style={{ margin: "0px 20px 0px 10px" }}
        >
          ${props.price}
        </h6>
        <Button
          eventHandler={() => updateProductCount(--productCount)}
          disable={productCount === 0}
        >
          -
        </Button>
        <span style={{ padding: 15 }}>{displayProductCount()}</span>
        <Button
          eventHandler={() => updateProductCount(++productCount)}
          disable={productCount === Number(props.stock)}
        >
          +
        </Button>
        <span className={badgeClass} style={{ marginLeft: 280 }}>
          {props.isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>
    </>
  );

  // return React.createElement(
  //   "h5",
  //   { className: "mt-0 font-weight-bold mb-2" },
  //   React.createElement(
  //     "p",
  //     { className: "font-italic text-muted mb-0 small" },
  //     props.name
  //   ),
  //   React.createElement
  // );
}

export default ProductDetails;
