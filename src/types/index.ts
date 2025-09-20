// src/types/index.ts
export interface Product {
	id: number
	name: string
	price: number
	originalPrice?: number
	description: string
	image: string
	category: string
	rating: number
	reviewCount: number
	inStock: boolean
	colors?: string[]
	sizes?: string[]
}

export interface CartItem {
	product: Product
	quantity: number
	selectedColor?: string
	selectedSize?: string
}

export interface Category {
	id: number
	name: string
	slug: string
	image?: string
}

// Lista de produtos fictícia
export const mockProducts: Product[] = [
	{
		id: 1,
		name: 'Smartphone Premium 128GB',
		price: 899.99,
		originalPrice: 999.99,
		description: 'Smartphone de última geração com câmera tripla e bateria de longa duração',
		image:
			'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		category: 'electronics',
		rating: 4.5,
		reviewCount: 128,
		inStock: true,
		colors: ['Preto', 'Azul', 'Branco'],
		sizes: ['128GB', '256GB'],
	},
	{
		id: 2,
		name: 'Tênis Esportivo Leve',
		price: 199.99,
		description: 'Tênis ideal para corrida e atividades físicas, com amortecimento premium',
		image:
			'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		category: 'sports',
		rating: 4.2,
		reviewCount: 86,
		inStock: true,
		colors: ['Preto', 'Branco', 'Azul'],
		sizes: ['38', '39', '40', '41', '42'],
	},
	{
		id: 3,
		name: 'Fone de Ouvido Sem Fio',
		price: 159.99,
		originalPrice: 199.99,
		description: 'Fone Bluetooth com cancelamento de ruído e até 30h de bateria',
		image:
			'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		category: 'electronics',
		rating: 4.7,
		reviewCount: 215,
		inStock: true,
		colors: ['Preto', 'Branco', 'Azul'],
	},
	{
		id: 4,
		name: 'Relógio Inteligente',
		price: 249.99,
		description: 'Monitor de atividades físicas e notificações com resistência à água',
		image:
			'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		category: 'electronics',
		rating: 4.4,
		reviewCount: 152,
		inStock: true,
		colors: ['Preto', 'Prata', 'Rose'],
	},
	{
		id: 5,
		name: 'Sofá Retrátil 3 Lugares',
		price: 1299.99,
		originalPrice: 1499.99,
		description: 'Sofá confortável com assento retrátil e encosto reclinável',
		image:
			'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		category: 'home',
		rating: 4.6,
		reviewCount: 93,
		inStock: true,
		colors: ['Cinza', 'Marrom', 'Preto'],
	},
	{
		id: 6,
		name: 'Camiseta Básica Algodão',
		price: 39.99,
		description: 'Camiseta 100% algodão com corte moderno e confortável',
		image:
			'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		category: 'clothing',
		rating: 4.3,
		reviewCount: 167,
		inStock: true,
		colors: ['Branco', 'Preto', 'Cinza', 'Azul'],
		sizes: ['P', 'M', 'G', 'GG'],
	},
	{
		id: 7,
		name: 'Bola de Futebol Oficial',
		price: 89.99,
		description: 'Bola de futebol oficial para partidas profissionais',
		image:
			'https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		category: 'sports',
		rating: 4.8,
		reviewCount: 74,
		inStock: true,
	},
	{
		id: 8,
		name: 'Kit Panelas Antiaderente',
		price: 299.99,
		originalPrice: 349.99,
		description: 'Conjunto com 5 panelas antiaderentes de alta durabilidade',
		image:
			'https://images.unsplash.com/photo-1583778176475-6c5fdf0a7d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		category: 'home',
		rating: 4.5,
		reviewCount: 121,
		inStock: true,
	},
	{
		id: 9,
		name: 'Mochila Executiva Antifurto',
		price: 129.99,
		description: 'Mochila com compartimento antifurto e carregador USB integrado',
		image:
			'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		category: 'accessories',
		rating: 4.6,
		reviewCount: 88,
		inStock: false,
		colors: ['Preto', 'Cinza', 'Azul Marinho'],
	},
	{
		id: 10,
		name: 'Tablet 10" 64GB',
		price: 499.99,
		originalPrice: 599.99,
		description: 'Tablet com tela Full HD, 64GB de armazenamento e 8MP de câmera',
		image:
			'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
		category: 'electronics',
		rating: 4.2,
		reviewCount: 203,
		inStock: true,
		colors: ['Cinza', 'Preto'],
	},
]
