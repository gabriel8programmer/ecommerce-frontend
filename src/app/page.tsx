'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/Button';
import { mockProducts } from '@/types';

const categories = [
  {
    name: 'Eletrônicos',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1593392857953-fb6d0f5f8b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Roupas',
    slug: 'clothing',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
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
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden mb-16 bg-gradient-to-r from-primary to-accent">
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="text-center text-primary-foreground px-8 max-w-2xl mx-auto py-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ofertas de Verão</h1>
              <p className="text-xl mb-8">Até 50% de desconto em itens selecionados</p>
              <Button asChild size="lg" className="text-primary bg-primary-foreground hover:bg-primary-foreground/90">
                <Link href="/products">
                  Comprar Agora
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Categorias Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  width={200}
                  height={160}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Produtos em Destaque</h2>
            <Button variant="link" asChild>
              <Link href="/products">
                Ver todos →
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-secondary rounded-xl p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Assine nossa newsletter</h2>
            <p className="text-secondary-foreground mb-6">
              Receba as últimas novidades e ofertas exclusivas diretamente no seu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="input flex-1"
              />
              <Button className="whitespace-nowrap">
                Assinar
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted text-muted-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">StyleShop</h3>
              <p>
                Sua loja online confiável para os melhores produtos com os preços mais competitivos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Comprar</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground">Produtos em destaque</a></li>
                <li><a href="#" className="hover:text-foreground">Ofertas</a></li>
                <li><a href="#" className="hover:text-foreground">Novos lançamentos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Informações</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground">Sobre nós</a></li>
                <li><a href="#" className="hover:text-foreground">Contato</a></li>
                <li><a href="#" className="hover:text-foreground">Política de privacidade</a></li>
                <li><a href="#" className="hover:text-foreground">Termos de serviço</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Atendimento</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-foreground">Central de ajuda</a></li>
                <li><a href="#" className="hover:text-foreground">Devoluções</a></li>
                <li><a href="#" className="hover:text-foreground">Entregas</a></li>
                <li><a href="#" className="hover:text-foreground">Rastrear pedido</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p>© 2023 StyleShop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}