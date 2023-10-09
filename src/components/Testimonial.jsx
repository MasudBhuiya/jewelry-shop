import React from 'react';

const Testimonial = () => {
    return (
        <div className='mt-20 mb-14'>
            <h1 className='text-4xl font-bold text-center mb-10'>Read Our Latest Articles</h1>
            <div className='w-[90%] mx-auto'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='text-center'>
                    <img className='h-64 w-80 rounded' src="https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?s=612x612&w=0&k=20&c=-7hy7-dPV7q7brtV60TrCR2Uq3vhrIaEU3tUqjqNYww=" alt="" />
                    <h1 className='font-bold text-xl text-center p-4'>Gold</h1>
                    <p>Selling gold involves appraisal for purity and weight, typically done by jewelry stores or gold buyers. Negotiate a price based on appraisal value and market rates to complete the sale.</p><br />
                    <p className='text-red-400'>Seller</p>
                    <p>October 11, 2022</p>
                </div>
                <div className='text-center'>
                    <img className='h-64 w-80 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYYwcN1F_h7joKqpyJh7cnlbhHOeIq89oSBnh5vsO8X1UMv_j2qz0YOLEBOcTH1qn0BU&usqp=CAU" alt="" />
                    <h1 className='font-bold text-xl text-center p-4'>Silver</h1>
                    <p>Selling gold involves appraisal for purity and weight, typically done by jewelry stores or gold buyers. Negotiate a price based on appraisal value and market rates to complete the sale.</p><br />
                    <p className='text-red-400'>Seller</p>
                    <p>October 11, 2022</p>
                </div>
                <div className='text-center'>
                    <img className='h-64 w-80 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlthfHP2dloCJpnBa6iLLf2pDGfUG7XjPyUK_x17ko-t6rJGOACUXAJLdJzLFd81BI6qQ&usqp=CAU" alt="" />
                    <h1 className='font-bold text-xl text-center p-4'>Diamond</h1>
                    <p>Selling gold involves appraisal for purity and weight, typically done by jewelry stores or gold buyers. Negotiate a price based on appraisal value and market rates to complete the sale.</p><br />
                    <p className='text-red-400'>Seller</p>
                    <p>October 11, 2022</p>
                </div>
            </div>
            </div>
</div>
    );
};

export default Testimonial;