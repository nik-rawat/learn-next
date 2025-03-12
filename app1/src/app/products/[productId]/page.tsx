import React from 'react'

const ProductDetails = async ({ 
    params,
} : {
    params: { productId: number };
}) => {
//   const { productId } = params;
    const productId = params.productId;
  return (
    <h1>Details about product {productId} </h1>
  )
}

export default ProductDetails