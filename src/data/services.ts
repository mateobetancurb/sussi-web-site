import { TrendingUp, Calendar, Star } from 'lucide-react';

export const SERVICES = [
    {
        id: 1,
        icon: TrendingUp,
        title: 'Social Media Management & Content Creation',
        subtitle: 'Ideal for restaurants, hotels, fashion, travel agencies',
        features: [
            'Strategic planning tailored to your industry',
            'Professional content creation',
            'Monthly execution and community management',
            'Analytics and performance reports',
        ],
        cta: 'Request Proposal',
    },
    {
        id: 2,
        icon: Calendar,
        title: 'Consulting / 1:1 Sessions',
        subtitle: 'For entrepreneurs and small brands',
        features: [
            'Social media strategy review',
            'Brand positioning analysis',
            'Content optimization guidance',
            'Clarity sessions for growth',
        ],
        cta: 'Book a Session',
    },
    {
        id: 3,
        icon: Star,
        title: 'Personal Branding',
        subtitle: 'Flagship service for building your authentic presence',
        features: [
            'Concept definition and brand pillars',
            'Content strategy and scripts',
            'Digital image consulting',
            'Comprehensive growth plan',
        ],
        cta: 'Work on My Personal Brand',
        featured: true,
    },
];