'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = [
    { name: 'Todos', href: '/products' },
    { name: 'Eletrônicos', href: '/products?category=electronics' },
    { name: 'Roupas', href: '/products?category=clothing' },
    { name: 'Casa', href: '/products?category=home' },
    { name: 'Esportes', href: '/products?category=sports' },
  ];

  if (!isClient) {
    return (
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="hidden md:flex space-x-8">
              {categories.map((_, i) => (
                <div key={i} className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            StyleShop
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-600">
              <UserIcon className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-700 hover:text-blue-600 relative">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button 
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DialogContent className="fixed inset-0 z-50 bg-white p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-blue-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;