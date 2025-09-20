'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import { StarIcon, HeartIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { Product } from '@/types';

// Dados mockados
const product: Product = {
  id: 1,
  name: 'Smartphone Premium 128GB',
  price: 899.99,
  originalPrice: 999.99,
  description: 'Smartphone de última geração com câmera tripla de 48MP, processador rápido, 128GB de armazenamento e bateria de longa duração que acompanha seu dia intenso.',
  image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  category: 'electronics',
  rating: 4.5,
  reviewCount: 128,
  inStock: true,
  colors: ['Preto', 'Azul', 'Branco'],
  sizes: ['128GB', '256GB', '512GB'],
};

export default function ProductDetail() {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    product.image,
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  ];

  const reviews = [
    {
      id: 1,
      author: 'João Silva',
      rating: 5,
      date: '12/05/2023',
      comment: 'Excelente produto! A bateria dura o dia todo e a câmera tem qualidade incrível.',
    },
    {
      id: 2,
      author: 'Maria Santos',
      rating: 4,
      date: '28/04/2023',
      comment: 'Muito bom, mas achei um pouco pesado. Fora isso, atendeu todas as expectativas.',
    },
  ];

  return (
    <div  className='bg-white'>
      <Head>
        <title>{product.name} - StyleShop</title>
        <meta name="description" content={product.description} />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8 ">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="rounded-lg overflow-hidden mb-4">
              <Image
                src={images[activeImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`rounded-md overflow-hidden ${
                    activeImage === index ? 'ring-2 ring-indigo-600' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`h-5 w-5 ${
                      rating < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviewCount} avaliações)</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <p className="text-3xl font-bold text-gray-900">R$ {product.price.toFixed(2)}</p>
                {product.originalPrice && (
                  <p className="ml-3 text-lg text-gray-500 line-through">
                    R$ {product.originalPrice.toFixed(2)}
                  </p>
                )}
                {product.originalPrice && (
                  <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              <p className="text-green-600 mt-1">Em estoque • Frete grátis</p>
            </div>

            <p className="text-gray-700 mb-8">{product.description}</p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Cor</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedColor === color
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Armazenamento</h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 text-gray-500">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors cursor-pointer">
                Adcionar ao Carrinho
              </button>
               <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors cursor-pointer">
                Comprar agora
              </button>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-3 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {isFavorite ? (
                  <HeartIcon className="h-6 w-6 text-red-500" />
                ) : (
                  <HeartOutlineIcon className="h-6 w-6 text-gray-400" />
                )}
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-medium text-gray-900 mb-3">Detalhes do produto</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Câmera tripla de 48MP com modo noturno</li>
                <li>• Bateria de 5000mAh com carregamento rápido</li>
                <li>• Tela AMOLED de 6.7 polegadas</li>
                <li>• Processador octa-core de última geração</li>
                <li>• Resistente a água (IP68)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-400">Avaliações dos clientes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={`h-5 w-5 ${
                          rating < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{review.date}</span>
                </div>
                <h4 className="font-medium mb-2 text-gray-500">{review.author}</h4>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>

          <button className="mt-8 text-indigo-600 hover:text-indigo-800 font-medium">
            Ver todas as avaliações
          </button>
        </section>
      </main>
    </div>
  );
}