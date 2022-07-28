// @ts-nocheck

export function ProductListItem({ product }) {
  return (
    <div>
      <div>
        <img src={product.image} alt="product" />
      </div>
      <div>
        <p>{product.title}</p>
        {/* Todo: Star rating */}
        <p>{product.price}</p>
      </div>
    </div>
  );
}
