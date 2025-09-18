import { useParams } from 'react-router';

const ProductPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      {/* <pre>{JSON.stringify(params)}</pre> */}
      <h1>Product page</h1>
      <p>Product Name: {params?.name}</p>
      <p>Product ID: {params?.id}</p>
    </div>
  );
};

export default ProductPage;
