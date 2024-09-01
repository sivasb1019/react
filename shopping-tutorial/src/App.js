import { useState } from "react";

import CreateProduct from "./Components/CreateProduct/CreateProduct";
import FilterProduct from "./Components/FilterProduct/FilterProduct";
import ProductLists from "./Components/ProductList/ProductList";

const products = [
  {
    id: 1,
    name: "Fresh Milk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    imageUrl: "Assets/fresh-milk.png",
    price: 12,
    stock: 10,
  },
  {
    id: 2,
    name: "Cottage Cheese",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    imageUrl: "Assets/cottage-cheese.png",
    price: 10,
    stock: 3,
  },
  {
    id: 3,
    name: "Brocoli",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    imageUrl: "Assets/brocoli.png",
    price: 15,
    stock: 8,
  },
  {
    id: 4,
    name: "Oranges",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    imageUrl: "Assets/oranges.png",
    price: 20,
    stock: 11,
  },
  {
    id: 5,
    name: "Olive oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    imageUrl: "Assets/olive-oil.png",
    price: 14,
    stock: 12,
  },
];

function App() {
  let [newProductList, updateProductList] = useState(products);
  let [filterValue, updateFilterValue] = useState("all");

  let filteredProductList = newProductList.filter((product) => {
    if (filterValue === "available") {
      return product.isAvailable === true;
    } else if (filterValue === "unavailable") {
      return product.isAvailable === false;
    } else {
      return product;
    }
  });

  function createProduct(product) {
    product.id = newProductList.length + 1;
    updateProductList([product, ...newProductList]);
  }

  function filterHandler(filterValue) {
    updateFilterValue(filterValue);
  }

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <CreateProduct createProduct={createProduct} />
        <FilterProduct selectedFilterValue={filterHandler} />
        <ProductLists newProductList={filteredProductList} />
      </div>
    </div>
  );
}

export default App;
