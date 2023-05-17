import Link from 'next/link'
import React from 'react'
// Here we have imported image from the next.js
import Image from 'next/image'

// From Utils we imported Helper.jsx which will help in to calcutate the discounted price in percentage;
import { getDiscountedPricePercentage } from '@/utils/helper'

const ProductCard = ({data: {attributes: p, id}}) => {

  return (
    <Link href={`/product/${p.slug}`} className='transform overflow-hidden bg-white duration-200 hover:scale-105'>

        {/*This image tag have no use because we use image from te backend*/}
        {/* <img className='w-full' src="/product-1.webp" alt="Product Image" /> */}
        <Image
          height={500}
          width={500}
          src={p?.thumbnail?.data?.attributes?.url}
          alt={p.name}
        />

        <div className='p-4 text-black/[0.9]'>
            <h2 className='text-lg font-medium'>{p.name}</h2>
            <div className='flex items-center text-black/[0.5]'>
                <p className='mr-2 text-lg font-semibold'>&#8377;{p.price}</p>
                
                {p.original_price && (
                  <>
                    <p className='text-base font-medium line-through'>&#8377;{p.original_price}</p>
                    <p className='ml-auto text-base font-medium text-green-400'>
                      {getDiscountedPricePercentage(
                          p.original_price,
                          p.price
                        )}
                        % off
                    </p>
                  </>
                )}
            </div>
    </div>
    </Link>
  )
}

export default ProductCard;