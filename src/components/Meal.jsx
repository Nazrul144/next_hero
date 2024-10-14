"use client"
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import Image from 'next/image';


const Meal = () => {
    const [search, setSearchMeal] = useState('')
    const [meals, setMeals] = useState([])

    const loadData = async ()=>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await res.json()
        setMeals(data.meals)
    }

    

    const handleSearch = (e) =>{
        setSearchMeal(e.target.value);
    }

    useEffect(()=>{
        loadData()
    },[search])


    return (
        <div className='mt-6'>
            <h4>This is meal page</h4>
        <input onChange={handleSearch} className='py-2 px-4 border-2 border-red-400 rounded-lg' type="text" placeholder='search meal' />
        <Button onClick = {()=> loadData()} >Search</Button>
        <div className='grid grid-cols-3 gap-6 border-2 border-red-400 rounded-lg'>
            {
                meals?.map((meal)=>(
                    <div key={meal.idMeal}>
                        <Image
                        src={meal.strMealThumb}
                        alt='Image'
                        width={500}
                        height={500}
                        />
                        <h1>Meal:{meal.strMeal}</h1>
                        <h1>Category:{meal.strCategory}</h1>
                        <h1>Area:{meal.strArea}</h1>
                        <h1>Description:{meal.strInstructions}</h1>
                    </div>
                ))
            }
        </div>
    </div>
    );
}

export default Meal;
