import ProductDetails from "./ProductDetails";

interface Props {
  params: {
    id: string;
  };
}
export default async function DetailsPage({ params }: Props) {
  const { id } = await params;
  return (
    <div>
        <ProductDetails productId={id}></ProductDetails>
    </div>
  )
}
