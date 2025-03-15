import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { productId } = await params;
  const title = await new Promise((res) => {
    res(`Iphone ${productId}`);
  })
  return {
    title: `Product ${title}`,
    description: `Details about product ${productId}`,
  };
}

export default async function ProductDetails({ params } : Props ) {
  const productId = (await params).productId;
  return (
    <h1>Details about product {productId} </h1>
  )
}