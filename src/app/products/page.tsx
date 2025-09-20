'use client'

import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import ProductCard from '@/components/product/ProductCard';
import { mockProducts } from '@/types';

const categories = ['Todos', 'Eletrônicos', 'Roupas', 'Casa', 'Esportes', 'Acessórios'];
const priceRanges = [
  { label: 'Todos os preços', min: 0, max: 10000 },
  { label: 'Até R$ 100', min: 0, max: 100 },
  { label: 'R$ 100 - R$ 200', min: 100, max: 200 },
  { label: 'R$ 200 - R$ 500', min: 200, max: 500 },
  { label: 'Acima de R$ 500', min: 500, max: 10000 },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [sortBy, setSortBy] = useState('relevance');

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || 
      product.category === selectedCategory.toLowerCase();
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    return matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // relevance - no sorting
  });

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Produtos - StyleShop</title>
        <meta name="description" content="Nossa coleção completa de produtos" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">Filtrar por</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-900">Categoria</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center text-gray-700">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-900">Faixa de Preço</h4>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <label key={index} className="flex items-center text-gray-700">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange.min === range.min && priceRange.max === range.max}
                        onChange={() => setPriceRange({ min: range.min, max: range.max })}
                        className="mr-2 text-blue-600 focus:ring-blue-500"
                      />
                      {range.label}
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategory('Todos');
                  setPriceRange({ min: 0, max: 10000 });
                }}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{sortedProducts.length} produtos encontrados</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                <option value="relevance">Relevância</option>
                <option value="price-low">Preço: Menor para Maior</option>
                <option value="price-high">Preço: Maior para Menor</option>
                <option value="rating">Melhor Avaliado</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('Todos');
                    setPriceRange({ min: 0, max: 10000 });
                  }}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Limpar Filtros
                </button>
              </div>
            )}

            {/* Pagination */}
            {sortedProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                    Anterior
                  </button>
                  <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
                  <button className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                    Próximo
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}