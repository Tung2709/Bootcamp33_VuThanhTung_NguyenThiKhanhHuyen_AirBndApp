import {configureStore} from "@reduxjs/toolkit"
import BookingReducer from "./BookingReducer/BookingReducer"

export const store= configureStore({
	reducer:{
		BookingReducer,		
	}
}
)