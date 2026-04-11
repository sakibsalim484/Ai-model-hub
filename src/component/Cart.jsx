import React from 'react';

const Cart = ({ carts }) => {
    const totalprice = carts.reduce((total, cart) => total + cart.price, 0);
    console.log(carts)
    return (
        <div className='p-5'>
            {carts.map(cart => (
                <div key={cart.id} className='flex justify-between items-center'>
                    <h2>your cart</h2>
                    <div className='flex items-center gap-2'>
                    <div className="w-20 h-20 flex-shrink-0 p-4" ><img src={cart.image}  className='w-full h-full object-contain border rounded-md' /></div>
                    <div><h2 className='font-bold'>{cart.title}</h2></div>
                    </div>

                    </div>
            ))}
            <div className='flex justify-between items-center mt-5 bg-black text-white p-5'>
                <div >total</div>
                <div>{totalprice}</div>
            </div>
        </div>
    );
};

export default Cart;