
'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <HeartIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartOutlineIcon className="h-5 w-5 text-gray-400" />
          )}
        </button>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold bg-gray-800 px-3 py-1 rounded">
              Esgotado
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center mb-1">
          <div className="flex">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={`h-4 w-4 ${
                  rating < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-1 text-sm text-gray-600">({product.reviewCount})</span>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2 h-10">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center">
          <p className="text-lg font-semibold text-gray-900">
            R$ {product.price.toFixed(2)}
          </p>
          {product.originalPrice && (
            <p className="ml-2 text-sm text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2)}
            </p>
          )}
        </div>

        <button
          disabled={!product.inStock}
          className={`mt-4 w-full py-2 px-4 rounded-md ${
            product.inStock
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          } transition-colors`}
        >
          {product.inStock ? 'Adicionar ao carrinho' : 'Esgotado'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;