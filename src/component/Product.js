import React from 'react';

function Product() {
    return (
        <div className='product p-4'>
            <div className=''>
                <img className='h-48 w-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1yhlTpkCnujnhzP-xioiy9RdDQkKLMnMSg&s' alt='Product' />
            </div>
            <p className='text-lg font-bold font-merriweather not-italic mt-4'>Headphones | High Base Clear Sound</p>
            <p>The flagship-level battery life for all-new OnePlus Nord Buds 2r delivers up to 38 hours of non-stop music on a single charge.</p>
            <p>$12</p>

            {/* Button with border */}

            <button className='mt-4 px-3 py-1 border border-gray-400 rounded'>
                Buy Now
            </button>
        </div>
    );
}

export default Product;
