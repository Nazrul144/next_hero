import React from 'react';
import Meal from '@/components/Meal';
import styles from './styles.module.css'

export const metadata = {
    title:{
        absolute:"Meals",
    },
    description: "Meal Page",
  };


const MealPage = () => {
    return (
        <div className='p-12'>
            <h1 className='font-bold text-2xl text-red-400'>Chose Your meal</h1>
            <h1 className={styles.font_style}>Chose Meal of your choice by searching....</h1>
          <Meal></Meal>
        </div>
    );
}

export default MealPage;
