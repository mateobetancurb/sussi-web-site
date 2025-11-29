export interface NavigationProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export interface NavItem {
    id: string;
    label: string;
}