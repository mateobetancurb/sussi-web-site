export interface NavigationProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export interface NavItem {
    id: string;
    label: string;
}

export interface Service {
    id: number;
    icon: React.ElementType;
    title: string;
    subtitle: string;
    features: string[];
    cta: string;
    featured?: boolean;
}