import react from 'react'
import { useState , useEffect , useCallback } from 'react'
import background from '../assets/image 1.png'
import p1 from '../assets/Untitled-1 1.png'
import p2 from '../assets/Untitled-2 1.png'
import message1 from '../assets/Group 2.png'


import Categories from '../Component/Categories.jsx'
import categories from '../Database/categories.jsx'
import Resturant from '../Database/Resturant.jsx'

function Home(){

  const alldishe = categories.map( (ele)=>{
    return (
        <Categories
        key={ele.id}
        image={ele.image}
        name={ele.name}

        />
    )
  })

  const allrestu = Resturant.map( (ele)=>{
    return (
        <Allresturant
        key={ele.id}
        image={ele.image}
        

        />
    )
  })


    return (
        <>

        <div className='flex w-5/6 justify-evenly items-end mx-auto my-20 border-2 border-gray-400  h-120 rounded-lg bg-neutral-100 ;
'>

            <div className=' ml-4 self-center w-full  flex flex-col font-sans '>
                <p className='text-lg p-4 pb-0 text-neutral-700' >
                Order Restaurant food, takeaway and groceries.
                </p>
                <h1 className='text-6xl p-4 font-medium '>
                Feast Your Senses, <h1 className='block  text-orange-400'>
                Fast and Fresh 
                </h1>
                </h1>

                <form  className='p-4 '>
                    <h3 className='text-lg  '>
                    Enter a postcode to see what we deliver
                    </h3>

                    <div className='flex justify-between  items-center w-3/5 border-2 border-gray-400 rounded-full'>
                    <input type=""
                    placeholder='e.g. EC4R 3TE'
                   className=' outline-none border-none text-black px-4 py-4 w-full'
                    
                    />

                    <button className='bg-orange-400 text-white rounded-full  text-lg font-medium w-1/2 px-16  py-4 '>
                        Search
                    </button>
                    </div>
                  

                </form>
            </div>



             <div className='w-full  border-1 border-black flex relative ' >

            <img src={background}  className='absolute  bottom-0  right-0 w-115 h-115 ' />
            <img src={p2}  className='absolute   w-78 z-10  right-45 bottom-0 ' />
            <img src={p1}  className='absolute  bottom-0  w-200 h-115 right-70 z-20   ' />
            <img src={message1}  className=' absolute z-40 
            bottom-5 right-7 w-80' />
           
           
            

          
                
            </div>

        </div>

       

        { /*  Categories */}

        <div className='flex justify-evenly w-5/6 mx-auto flex-wrap my-40'>
            {alldishe}
        </div>


        { /*   Popular resturants */}

       
            <div className='flex   flex-col  w-5/6 mx-auto my-10  items-start '>

            <h1 className='text-4xl text-black p-4 font-bold'>Popular Restaurants </h1>

            <div className='flex justify-evenly w-full p-4  flex-wrap '>
                {allrestu}

            </div>

            </div>
           


            
            
           

               

           
            






        
        </>
    )
}
export default Home 

const Allresturant = ({image})=>{

    return (
        <>
        
        <img src={image} className='w-48' />
        </>
    )
}