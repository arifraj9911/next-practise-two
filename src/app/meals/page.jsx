"use client";

import Meals from "@/components/Meals/Meals";
import { getData } from "@/hooks/useGetData";
import React, { useState } from "react";

const MealsPage = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    try {
      const mealsData = await getData(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      setMeals(mealsData.meals);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlerSearchMeal = () => {
    loadData();
    console.log(meals);
  };
  //   console.log(meals);
  return (
    <div>
      {" "}
      <h4 className="text-2xl mb-1">MealBox For Your Favor</h4>
      <p>Search meal by keyword</p>
      <div className="mt-4">
        <input
          type="text"
          name=""
          onChange={(e) => setSearch(e.target.value)}
          className=" p-2 rounded-md bg-gray-100 rounded-r-none outline-none"
          placeholder="search by keyword..."
          id=""
        />
        <button
          onClick={handlerSearchMeal}
          className="bg-green-600 text-white px-3 py-2  rounded-md rounded-l-none hover:bg-black  duration-300 ease-in-out"
        >
          Login
        </button>
      </div>
      {meals === undefined ? (
        <p className="mt-4 text-red-500">No Meals available for this search</p>
      ) : (
        <Meals meals={meals}></Meals>
      )}
    </div>
  );
};

export default MealsPage;
