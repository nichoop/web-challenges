import { getProductById } from "/services/productServices.js";

export default function handler(request, response, products) {
  const { id } = request.query;
  const product = getProductById(id);

  if (!product) {
    response.status(200).json({ status: "Not Found" });
  } else {
    response.status(200).json(product);
  }
}
