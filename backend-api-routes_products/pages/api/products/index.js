import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const products = getAllProducts();

  const product = products.find((product) => product.id === id);
  if (!product) {
    response.status(200).json({ status: "Not Found" });
  } else {
    response.status(200).json(product);
  }
}
