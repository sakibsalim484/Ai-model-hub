import React, { useState } from 'react';

const ModelCard = ({ model }) => {
    const [isSubcribed, setIsSubcribed] = useState(false);
    const handlesubcribed = () => {
        setIsSubcribed(!isSubcribed);
    }

    return (
                    <div key={model.id} className='shadow-lg rounded-2xl border p-4 space-y-5'>
                        <div className=' flex justify-center items-center bg-zinc-400 '>
                            <img src={model.image} alt={model.title} className='w-[20%] h-[10%]' />
                            </div>
                            <div >
                            <h2 className='font-bold'>{model.title}</h2>
                            <p>{model.description}</p>
                            </div>
                            <button className='btn w-full bg-red-500 text-white  rounded-lg' onClick={handlesubcribed }>
                                {isSubcribed ? 'subcribed' : 'Subscribe now'}
                            </button>
                            <div className='text-2xl font-bold'>Price: ${model.price}/month</div>
                        
                        
                    </div>
    );
};

export default ModelCard;