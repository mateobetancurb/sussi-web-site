import { TrendingUp, Calendar, Star } from 'lucide-react';

export const SERVICES = [
    {
        id: 1,
        icon: TrendingUp,
        title: 'Gestión de Redes Sociales y Creación de Contenido',
        subtitle: 'Ideal para restaurantes, hoteles, moda, agencias de viajes',
        features: [
            'Planificación estratégica adaptada a tu industria',
            'Creación de contenido profesional',
            'Ejecución mensual y gestión de comunidad',
            'Analíticas e informes de rendimiento',
        ],
        cta: 'Solicitar Propuesta',
    },
    {
        id: 2,
        icon: Calendar,
        title: 'Consultoría / Sesiones 1:1',
        subtitle: 'Para emprendedores y pequeñas marcas',
        features: [
            'Revisión de estrategia de redes sociales',
            'Análisis de posicionamiento de marca',
            'Guía de optimización de contenido',
            'Sesiones de claridad para el crecimiento',
        ],
        cta: 'Reservar Sesión',
    },
    {
        id: 3,
        icon: Star,
        title: 'Marca Personal',
        subtitle: 'Servicio estrella para construir tu presencia auténtica',
        features: [
            'Definición de concepto y pilares de marca',
            'Estrategia de contenido y guiones',
            'Consultoría de imagen digital',
            'Plan integral de crecimiento',
        ],
        cta: 'Hagámoslo juntos',
        featured: true,
    },
];