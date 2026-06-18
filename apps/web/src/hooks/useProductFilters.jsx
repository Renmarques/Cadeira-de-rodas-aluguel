
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

  // Core mapping logic for MedEquip categories
  const getCategoryProducts = useCallback((categoryName, allProducts) => {
    if (!allProducts || allProducts.length === 0) return [];

    // 'Ver Todos' should show everything
    if (!categoryName || categoryName === 'Ver Todos') {
      return allProducts;
    }

    return allProducts.filter((product) => {
      const pName = product.name.toLowerCase();
      const cat = categoryName.toLowerCase();

      // Implement specific mappings based on rules:
      if (cat === 'cama hospitalar manual') {
        return pName.includes('cama hospitalar manual');
      }
      if (cat === 'cama hospitalar elétrica') {
        return pName.includes('cama hospitalar motorizada') || pName.includes('cama hospitalar elétrica');
      }
      if (cat === 'poltrona hospitalar') {
        return pName.includes('poltrona hospitalar');
      }
      if (cat === 'guincho de elevação') {
        return pName.includes('guincho');
      }

      // Fallback exact or partial match for remaining generic terms
      return pName.includes(cat);
    });
  }, []);

  return {
    activeCategory,
    updateCategory,
    getCategoryProducts
  };
}
