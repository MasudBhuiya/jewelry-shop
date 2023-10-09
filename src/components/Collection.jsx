import React from 'react';

const Collection = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-14 mb-10'>Our Collection</h1>
            <div className='flex items-center justify-center'>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                <div className='text-center'>
                <img className='h-80 w-80 rounded-lg ' src="https://image3.jdomni.in/banner/07042023/7A/4C/2D/603781A9FDB3F576AAEAE167C4_1680846412684.jpg?output-format=webp" alt="" />
                <h1 className='text-lg font-semibold p-2'>Silver Jewellery</h1>
                </div>
                <div className='text-center'>
                <img className='h-80 w-80 rounded-lg' src="https://image1.jdomni.in/banner/07042023/C4/6A/5B/29AE8C78312AF88EC94B45627A_1680846194300.jpg?output-format=webp" alt="" />
                <h1 className='text-lg font-semibold p-2'>Gold Jewellery</h1>
                </div>
                <div className='text-center'>
                <img className='h-80 w-80 rounded-lg' src="https://image2.jdomni.in/banner/07042023/AD/37/FB/43F1B9EDD05879788B126749D5_1680846461972.jpg?output-format=webp" alt="" />
                <h1 className='text-lg font-semibold p-2'>Platinum Jewellery</h1>
                </div>
                <div className='text-center'>
                <img className='h-80 w-80 rounded-lg' src="https://image3.jdomni.in/banner/07042023/E8/A4/68/EE3A9B8D034DC46A2822179D35_1680846515209.jpg?output-format=webp" alt="" />
                <h1 className='text-lg font-semibold p-2'>Diamond Jewellery</h1>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Collection;