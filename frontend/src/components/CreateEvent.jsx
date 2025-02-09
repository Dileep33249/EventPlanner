import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './CreateEvent.css';

function CreateEvent() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formattedDate, setFormattedDate] = useState(""); 

    const onSubmit = (data) => {
        console.log(data);
        // Add your event creation logic here
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setFormattedDate(formatDate(selectedDate));
    };

    return (
        <div className="create-event">
            <h2>Create a New Event</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-container">
                    <div className="sink">
                        <label>Event Name:</label>
                        <input 
                            type="text" 
                            {...register('eventName', { required: { value: true, message: "*Event Name is required" } })} 
                        />
                        {errors.eventName && <span>{errors.eventName.message}</span>}
                    </div>

                    <div className="sink">
                        <label>Date & Time:</label>
                        <input 
                            type="datetime-local" 
                            {...register('dateTime', { required: { value: true, message: "*Date & Time are required" } })} 
                            onChange={handleDateChange}
                        />
                        {errors.dateTime && <span>{errors.dateTime.message}</span>}
                        <span className="formatted-date">{formattedDate}</span> {/* Display the formatted date */}
                    </div>

                    <div className="sink">
                        <label>Venue:</label>
                        <input 
                            type="text" 
                            {...register('venue', { required: { value: true, message: "*Venue is required" } })} 
                        />
                        {errors.venue && <span>{errors.venue.message}</span>}
                    </div>

                    <div className="sink">
                        <label>Description:</label>
                        <textarea 
                            {...register('description', { required: { value: true, message: "*Description is required" } })} 
                        />
                        {errors.description && <span>{errors.description.message}</span>}
                    </div>

                    <div className="sink">
                        <label>Event Image:</label>
                        <input type="file" {...register('image')} />
                    </div>

                    <button type="submit">Create Event</button>
                </div>
            </form>
        </div>
    );
}

export default CreateEvent;
