import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import React from 'react'
import './foodCategory.css'
export default function FoodCategoryMiddle({image , number, title}) {
    return (
        <div className='foodcategory' style={{ background : `url(${image})` ,backgroundSize: 'cover',backgroundRepeat: 'no-repeat', backgroundPosition: 'center',flex: number==1? 1 : 2}}>
            <h1>{title}</h1>
        </div>
    )
}
