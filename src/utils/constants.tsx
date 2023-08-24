export interface mainNavProps {
    name: string;
}

export const mainNav: mainNavProps[] = [{
    name: 'Home',
}, {
    name: 'About',
}, {
    name: 'My Page',
}, {
    name: 'Contact',
}];

export interface homeInfoCardsProps {
    title: string;
    title_color: string;
    subtitle: string;
    description: string;
}

export const HOME_INFO_CARDS: homeInfoCardsProps[] = [
    {
        title: '100+',
        title_color: 'medium_blue',
        subtitle: 'Total Tools',
        description: 'Lot of tools that offer free and premium features',
    },{
        title: '50+',
        title_color: 'medium_green',
        subtitle: 'Free Tools',
        description: 'Explore free tools that would help you achieve something',
    },{
        title: '40+',
        title_color: 'medium_red',
        subtitle: 'Premium Tools',
        description: 'Need more feature? lets try the premium tools',
    },
];