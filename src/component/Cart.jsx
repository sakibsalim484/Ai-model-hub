import React from 'react';

const Cart = ({ carts,setCarts }) => {
    const totalprice = carts.reduce((total, cart) => total + cart.price, 0);
    console.log(carts)
    const handlechecout =()=>{
setCarts([])
    }
    const handleDelete = (cart)=>{
 console.log(cart)
 const filterarray = carts.filter(c => c.id !== cart.id);
 setCarts(filterarray)
    }
    return (
        <div className='p-5'>
            <h2>your cart</h2>
            {carts.length === 0 ? <p>card is empty</p> : (
                <div>
                    {carts.map(cart => (
                        <div key={cart.id} className='flex justify-between items-center'>
                            <div className="w-20 h-20 flex-shrink-0 p-4"><img src={cart.image} className='w-full h-full object-contain border rounded-md' /></div>
                            <div><h2 className='font-bold'>{cart.title}</h2></div>
                            <button className='btn btn-error' onClick={() => handleDelete(cart)}>x</button>
                        </div>
                        
                    ))}
                </div>
            )}
            <div className='flex justify-between items-center mt-5 bg-black text-white p-5'>
                <div>total</div>
                <div>${totalprice}</div>
            </div>
            <button onClick={handlechecout} className='btn w-full bg-red-500 mt-5 font-bold text-white text-xl rounded-2xl'>proceed to checkout</button>
        </div>
    );
};

export default Cart;