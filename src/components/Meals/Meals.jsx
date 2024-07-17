"use client";
import Image from "next/image";
import React from "react";

const Meals = ({ meals }) => {
    // console.log(meals);

  return (
    <div className="grid grid-cols-3 gap-6 mt-12">
      {meals?.map((meal) => (
        <div className="border p-3 space-y-4" key={meal.idMeal}>
          <Image
            src={meal.strMealThumb}
            alt="meal_photo"
            width={500}
            height={500}
          ></Image>
          <h4 className="text-xl">{meal.strMeal}</h4>
          <p>{meal.strInstructions.slice(0, 200)}...</p>
        </div>
      ))}
    </div>
  );
};

export default Meals;
