import { Button } from '@chakra-ui/react'
import React from 'react'
import FoodCategoryMiddle from './FoodCategoryMiddle'
import './middlecontent.css'
export default function MiddleContent() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#3080e8" fill-opacity="1" d="M0,288L80,245.3C160,203,320,117,480,96C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
<div className='middlecontent'>
    
        <div className="col1">
            <FoodCategoryMiddle title={'Comfort food'} number={1} image={'https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}/>
            <FoodCategoryMiddle title={'Dolci e dessert'} number={2} image={'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'}/>

        </div>
        <div className="col2">
            <FoodCategoryMiddle title={'Perfetti da condividere'} number={2} image={'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}/>
            <FoodCategoryMiddle title={'Esclusiva appetite'} number={1} image={'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'}/>

        </div>
        <div className="container">
  <Button>Scopri la nostra selezione</Button>
        </div>
      
</div>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#3080e8" fill-opacity="1" d="M0,288L80,245.3C160,203,320,117,480,96C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg> 
        </div>
    )
}
