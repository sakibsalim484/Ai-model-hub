import React, { use } from 'react';
import ModelCard from './ModelCard';

const Model = ({modelpromise, carts, setCarts}) => {
    const models = use(modelpromise);
    console.log(models)
    return (
        <div>
            <div className='text-center '>
                <h1 >Choose Your Model</h1>
                <p>Select a model from the list below</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                models.map(model=> (
<ModelCard model={model} carts={carts} key={model.id} setCarts={setCarts}></ModelCard>
                ))
                }
            </div>
        </div>
    );
};

export default Model;