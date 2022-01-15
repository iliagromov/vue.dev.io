import { createRouter, createWebHistory } from 'vue-router';
import Cart from '@/views/Cart';
import ProductsList from '@/views/ProductsList';
import Product from '@/views/Product';
import Checkout from '@/views/checkout/Base';
import CheckoutStep1 from '@/views/checkout/Step1';
import CheckoutStep2 from '@/views/checkout/Step2';

import E404 from '@/views/E404';

const routes = [
    {
        name: 'cart',
        path: '/cart',
        component: Cart
    },
    {
        name: 'checkout',
        path: '/order',
        component: Checkout,
        children: [
            {
                path: '',
                component: CheckoutStep1
            },
            {
                path: 'step-2',
                component: CheckoutStep2
            }
        ]
    },
    {
        name: 'catalog',
        path: '/',
        component: ProductsList
    },
    {
        name: 'product-item',
        path: '/product/:id',
        component: Product
    },
    {
        name: 'E404',
        path: '/:pathMatch(.*)',
        component: E404,
    }

];

export default createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});
