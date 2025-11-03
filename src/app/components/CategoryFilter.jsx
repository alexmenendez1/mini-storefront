"use client";
 const updateProduct = (id, field, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

  return <ProductList products={products} updateProduct={updateProduct} />;
