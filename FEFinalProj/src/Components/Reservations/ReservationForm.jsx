import { useState } from "react";

export default function ReservationForm({availableTimes, setAvailableTimes}) {
    const [dateData, setDateData] = useState("");
    const [guests, setGuests] = useState(1);
    const [occassions, setOccassionS] = useState(["Birthday", "Anniversary"]);

    const handleChange = (event) => {
        const changeField = event.target.name;
        const newValue = event.target.value;

        if (changeField === 'date') {
            setDateData(newValue);
        } else if (changeField === 'guests') {
            setGuests(newValue);
        }

    }

    return (
        <form style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}>
            <label htmlfor="res-date">Choose date</label>
            <input type="date" id="res-date" value={dateData} onChange={handleChange} name="date" />
            <label htmlfor="res-time">Choose time</label>
            <select id="res-time ">
                {availableTimes.map(time => {
                    return <option>{time}</option>
                })}
            </select>
            <label htmlfor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleChange} name="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                {occassions.map(occasion => {
                    return <option>{occasion}</option>
                })}
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}