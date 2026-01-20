import type { Destination } from '../types';

export const destinations: Destination[] = [
    {
        id: '1',
        title: 'Santorini Sunset Resort',
        location: 'Oia, Santorini',
        country: 'Greece',
        description: 'Experience the magic of Santorini with breathtaking sunset views, crystal clear waters, and traditional white-washed architecture. This luxury resort offers infinity pools and private terraces.',
        price: 1200,
        duration: '7 days',
        rating: 4.8,
        reviewsCount: 128,
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2938&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2938&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed2a?q=80&w=2787&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2574&auto=format&fit=crop'
        ],
        highlights: ['Sunset Views', 'Private Infinity Pool', 'Wine Tasting', 'Volcanic Beach Tour'],
        amenities: ['Wifi', 'Pool', 'Spa', 'Restaurant', 'AC'],
        category: 'beach'
    },
    {
        id: '2',
        title: 'Kyoto Cultural Retreat',
        location: 'Kyoto',
        country: 'Japan',
        description: 'Immerse yourself in ancient Japanese culture. Visit golden temples, walk through bamboo forests, and participate in traditional tea ceremonies.',
        price: 1800,
        duration: '10 days',
        rating: 4.9,
        reviewsCount: 85,
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=2574&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1528360983277-13d9b152c611?q=80&w=2940&auto=format&fit=crop'
        ],
        highlights: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Grove', 'Tea Ceremony', 'Geisha District'],
        amenities: ['Wifi', 'Breakfast', 'Guided Tours', 'Onsen'],
        category: 'cultural'
    },
    {
        id: '3',
        title: 'Bali Jungle Villa',
        location: 'Ubud, Bali',
        country: 'Indonesia',
        description: 'Escape to the heart of the jungle in Ubud. Stay in an eco-friendly bamboo villa surrounded by lush greenery and rice terraces.',
        price: 800,
        duration: '5 days',
        rating: 4.7,
        reviewsCount: 204,
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2880&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2940&auto=format&fit=crop'
        ],
        highlights: ['Monkey Forest', 'Rice Terraces', 'Yoga Classes', 'Waterfall Hike'],
        amenities: ['Wifi', 'Pool', 'Yoga Deck', 'Scooter Rental'],
        category: 'adventure'
    },
    {
        id: '4',
        title: 'Swiss Alps Ski Chalet',
        location: 'Zermatt',
        country: 'Switzerland',
        description: 'Luxury skiing experience with views of the Matterhorn. Enjoy world-class slopes adjacent to this cozy wooden chalet.',
        price: 3500,
        duration: '7 days',
        rating: 5.0,
        reviewsCount: 42,
        image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2865&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2865&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1483864197473-10d65b262dce?q=80&w=2936&auto=format&fit=crop'
        ],
        highlights: ['Ski-in/Ski-out', 'Matterhorn View', 'Private Chef', 'Spa'],
        amenities: ['Wifi', 'Fireplace', 'Sauna', 'Ski Storage'],
        category: 'mountain'
    },
    {
        id: '5',
        title: 'New York City Loft',
        location: 'Manhattan, NY',
        country: 'USA',
        description: 'Live like a local in this stylish industrial loft in the heart of SoHo. Steps away from the best restaurants and shopping.',
        price: 2500,
        duration: '4 days',
        rating: 4.6,
        reviewsCount: 156,
        image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0d6b21?q=80&w=2940&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1496417263034-38ec4f0d6b21?q=80&w=2940&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=2942&auto=format&fit=crop'
        ],
        highlights: ['Central Park', 'Broadway', 'Rooftop Bar', 'Museums'],
        amenities: ['Wifi', 'Kitchen', 'Gym access', 'Doorman'],
        category: 'city'
    }
];

export const reviews = [
    {
        id: 'r1',
        author: 'Sarah Jenkins',
        rating: 5,
        date: '2023-10-15',
        comment: 'Absolutely stunning views defined our stay. The service was impeccable.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop'
    },
    {
        id: 'r2',
        author: 'Mike Ross',
        rating: 4,
        date: '2023-09-22',
        comment: 'Great location, but the wifi was a bit spotty.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop'
    }
];
