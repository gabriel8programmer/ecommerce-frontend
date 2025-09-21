'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Compra Realizada - StyleShop</title>
        <meta name="description" content="Sua compra foi realizada com sucesso" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Compra Realizada com Sucesso!</h1>
          
          <p className="text-gray-600 mb-8">
            Obrigado por comprar na StyleShop. Seu pedido foi processado e você receberá 
            um email de confirmação em breve. O número do seu pedido é <strong>#STYLE2024001</strong>.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Resumo do Pedido</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Data:</strong> {new Date().toLocaleDateString('pt-BR')}</p>
              <p><strong>Total:</strong> R$ 1.074,98</p>
              <p><strong>Método de Pagamento:</strong> Cartão de Crédito</p>
              <p><strong>Previsão de Entrega:</strong> 2-3 dias úteis</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continuar Comprando
            </Link>
            <Link
              href="/orders"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              Ver Meus Pedidos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}