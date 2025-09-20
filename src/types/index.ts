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
