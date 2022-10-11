import React, { useState, useEffect } from "react";
import { getAllProducts } from "../Service/productsServices";
import Link from "next/link";

function Products() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await getAllProducts();
        setListOfProducts(response);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    request();
  }, []);

  return (
    <div id="work">
      {loading && <div>Loading...</div>}
      <div>
        <>
          {listOfProducts.map((product) => (
            <Link href={"/" + product.id} key={product.id}>
              <div>
                <p>name:{product.data().name}</p>
                <img src={product.data().img} />
              </div>
            </Link>
          ))}
        </>
      </div>
    </div>
  );
}

export default Products;
