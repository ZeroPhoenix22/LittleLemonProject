import { useReducer, useState } from "react";
import ReservationForm from "./ReservationForm";

export default function Reservations() {

    const updateTimes = () => {
        return availableTimes;
    }

    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }

    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);

    

    

    return (
        <main>
            <ReservationForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
        </main>
    );
}