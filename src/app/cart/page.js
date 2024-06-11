'use client'
import CartPage from '@/components/CartPage';
import { useSelector } from 'react-redux';
export default function Cart() {
    const items = useSelector((state) => state.cart.items)
    return (
        <>
            <CartPage items={items} />
        </>
    )
}