export interface Review {
    id: string;
    author: string;
    rating: number; // 1-5
    date: string;
    comment: string;
    avatar?: string;
}

export interface Destination {
    id: string;
    title: string;
    location: string;
    country: string;
    description: string;
    price: number; // per person
    duration: string; // e.g. "5 days"
    rating: number;
    reviewsCount: number;
    image: string;
    gallery: string[];
    highlights: string[];
    amenities: string[];
    category: 'beach' | 'mountain' | 'city' | 'adventure' | 'cultural';
    coordinates?: {
        lat: number;
        lng: number;
    };
}

export interface SearchFilters {
    destination?: string;
    minPrice?: number;
    maxPrice?: number;
    minRating?: number;
    category?: string;
}
