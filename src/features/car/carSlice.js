import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model-S", "Model-Y", "Model-3", "Model-X", "Solar Roof", "Solar Panel"],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.cars.cars;

export default carsSlice.reducer;
