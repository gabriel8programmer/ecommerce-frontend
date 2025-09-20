import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import { CartItem } from '@/types';

// Dados mockados
const cartItems: CartItem[] = [
  {
    product: {
      id: 1,
      name: 'Smartphone Premium 128GB',
      price: 899.99,
      description: 'Smartphone de última geração',
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'electronics',
      rating: 4.5,
      reviewCount: 128,
      inStock: true,
    },
    quantity: 1,
    selectedColor: 'Preto',
    selectedSize: '128GB',
  },
  {
    product: {
      id: 2,
      name: 'Fone de Ouvido Sem Fio',
      price: 159.99,
      description: 'Fone Bluetooth com cancelamento de ruído',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      category: 'electronics',
      rating: 4.7,
      reviewCount: 215,
      inStock: true,
    },
    quantity: 2,
    selectedColor: 'Branco',
  },
];

export default function Cart() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div>
      <Head>
        <title>Carrinho - StyleShop</title>
        <meta name="description" content="Seu carrinho de compras" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Carrinho de Compras</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-6">Seu carrinho está vazio.</p>
            <Link
              href="/products"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
            >
              Continuar Comprando
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className={`p-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 ${
                      index < cartItems.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={120}
                      height={120}
                      className="w-full sm:w-24 h-24 object-contain flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.product.name}
                      </h3>
                      {item.selectedColor && (
                        <p className="text-gray-600">Cor: {item.selectedColor}</p>
                      )}
                      {item.selectedSize && (
                        <p className="text-gray-600">Tamanho: {item.selectedSize}</p>
                      )}
                      <p className="text-lg font-semibold text-gray-900 mt-2">
                        R$ {item.product.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                      </div>
                      <button className="text-red-600 hover:text-red-800">
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <Link
                  href="/products"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  ← Continuar Comprando
                </Link>
                <button className="text-gray-600 hover:text-gray-800 font-medium">
                  Limpar Carrinho
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Resumo do Pedido</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span>{shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && subtotal > 0 && (
                    <div className="text-green-600 text-sm">
                      Parabéns! Você ganhou frete grátis.
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors text-center block"
                >
                  Finalizar Compra
                </Link>

                <p className="text-gray-500 text-sm mt-4">
                  Ao finalizar a compra, você concorda com nossos{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    Termos de Serviço
                  </a>{' '}
                  e{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}