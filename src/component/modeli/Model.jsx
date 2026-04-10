import React, { use } from 'react';

const Model = ({modelpromise}) => {
    const models = use(modelpromise);
    console.log(models)
    return (
        <div>
            <div className='text-center '>
                <h1 >Choose Your Model</h1>
                <p>Select a model from the list below</p>
            </div>
            <div>
                {
                models.map(model=> <div key={model.id}>
                    <div>
                    <h2 className='font-bold'>{model.title}</h2>
                    <img src={model.image} alt={model.title} className='w-[10%] h-[10%]' />
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Model;