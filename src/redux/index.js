import { combineReducers } from '@reduxjs/toolkit';
import vehicleReducer from './vehicleReducer';
// import selectedVehicleReducer from './selectedVehicleReducer';

const rootReducer = combineReducers({
  vehicles: vehicleReducer,
//   selectedVehicle: selectedVehicleReducer,
});

export default rootReducer;
