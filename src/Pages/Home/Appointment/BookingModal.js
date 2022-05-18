import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({date, treatment, setTreatment, refetch}) => {
    const {_id, name, slots} = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP')

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patienName: user.displayName,
            phone: event.target.phone.value
        }
        console.log(booking)
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })

        .then(res => res.json())
        .then(data =>{
        // to close the modal
        console.log(data);
        if(data.success){
            toast(`Appointment is set, ${formattedDate} at ${slot}`)
        }
        else{
            toast(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
        }
        refetch();
        setTreatment(null)
        });

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal"  className="modal-toggle" />
    <div  className="modal modal-bottom sm:modal-middle">
        <div  className="modal-box">
        <label htmlFor="booking-modal"  className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3  className="font-bold text-lg text-secondary text-center">Booking for: {name}</h3>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
            <input type="text" disabled value={format(date, 'PP')}  className="input input-bordered w-full max-w-xs" />
            
            <select name='slot'  className="select select-bordered w-full max-w-xs">
            {
                                slots.map((slot, index)=> <option key={index} value={slot}>{slot}</option>)
            }

            </select>
            <input type="text" name="name"  disabled value={user?.displayName || ''} className="input input-bordered input-dark w-full max-w-xs" />
            <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered input-dark w-full max-w-xs" />
            <input type="text" name='phone' placeholder="phone"  className="input input-bordered input-dark w-full max-w-xs" />
            <input type="submit" value='submit' placeholder="Type here"  className="btn btn-secondary w-full max-w-xs" />
            </form>
            <div  className="modal-action">
            <label for="booking-modal"  className="btn">Yay!</label>
            </div>
        </div>
    </div>
        </div>
    );
};

export default BookingModal;