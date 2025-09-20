import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import ProductCard from '@/components/product/ProductCard';
import { mockProducts } from '@/types';
import Image from 'next/image';

const categories = [
  {
    name: 'Eletrônicos',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Roupas',
    slug: 'clothing',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Casa',
    slug: 'home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Esportes',
    slug: 'sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  },
];

export default function Home() {
  // Pegar apenas 4 produtos para a página inicial
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>StyleShop - Sua loja online</title>
        <meta name="description" content="Encontre os melhores produtos com os preços mais baixos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden mb-16 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
            <div className="text-center text-white px-8 max-w-2xl mx-auto py-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ofertas de Verão</h1>
              <p className="text-xl mb-8">Até 50% de desconto em itens selecionados</p>
              <Link
                href="/products"
                className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Comprar Agora
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Categorias Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  width={150}
                  height={50}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Produtos em Destaque</h2>
            <Link
              href="/products"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-100 rounded-xl p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Assine nossa newsletter</h2>
            <p className="text-gray-700 mb-6">
              Receba as últimas novidades e ofertas exclusivas diretamente no seu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Assinar
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">StyleShop</h3>
              <p className="text-gray-400">
                Sua loja online confiável para os melhores produtos com os preços mais competitivos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Comprar</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Produtos em destaque</a></li>
                <li><a href="#" className="hover:text-white">Ofertas</a></li>
                <li><a href="#" className="hover:text-white">Novos lançamentos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informações</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Política de privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos de serviço</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de ajuda</a></li>
                <li><a href="#" className="hover:text-white">Devoluções</a></li>
                <li><a href="#" className="hover:text-white">Entregas</a></li>
                <li><a href="#" className="hover:text-white">Rastrear pedido</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 StyleShop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}