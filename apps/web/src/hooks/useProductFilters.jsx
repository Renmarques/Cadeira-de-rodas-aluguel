
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useProductFilters(initialCategory = 'Ver Todos') {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize active category from URL params, fallback to initialCategory
  const [activeCategory, setActiveCategory] = useState(() => {
    return searchParams.get('category') || initialCategory;
  });

  // Sync state with URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categoryParam !== activeCategory) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams, activeCategory]);

  const updateCategory = useCallback((categoryName) => {
    setActiveCategory(categoryName);
    const params = new URLSearchParams(searchParams);
    params.set('category', categoryName);
    setSearchParams(params, { replace: true });
  }, [searchParams, setSearchParams]);

   const getCategoryProducts = useCallback((categoryName, allProducts) => {
     if (!allProducts || allProducts.length === 0) return [];

     if (!categoryName || categoryName === 'Ver Todos') {
    return allProducts;
  }

     return allProducts.filter(
    (product) => product.category === categoryName
  );
}, []);

return {
  activeCategory,
  updateCategory,
  getCategoryProducts
};
}