import React from 'react'
import NotFound from '@/app/not-found'

const ProductReview = async ( { params } : {
    params: Promise<{ productId: string, reviewId: string
    }>
} ) => {
    const { productId, reviewId } = await params;
    if (parseInt(productId) > 100) {
      return <NotFound />
    }
  return (
    <h1>Product {productId} review {reviewId} is here</h1>
  )
}

export default ProductReview