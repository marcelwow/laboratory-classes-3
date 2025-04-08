// 🏗 Structo the Builder
// Stwórz stałą HOME_LINK.
// Podpowiedź: const HOME_LINK = { ... };
const HOME_LINK = {
    url: '/',
    label: 'Home'
};
// 🏗 Structo the Builder
// Stwórz stałą LOGOUT_LINKS.
// Podpowiedź: const LOGOUT_LINKS = [ ... ];
const LOGOUT_LINKS = [
    {
        url: '/logout',
        label: 'Logout'
    },
    {
        url: '/kill',
        label: 'Kill Server'
    }
];

// 🏗 Structo the Builder
// Stwórz stałą MENU_LINKS.
const MENU_LINKS = [
    HOME_LINK,
    {
        url: '/product',
        label: 'Product'
    },
    ...LOGOUT_LINKS
];

module.exports = {
    HOME_LINK,
    LOGOUT_LINKS,
    MENU_LINKS
};
