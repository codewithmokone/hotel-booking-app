import React, { useState, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { CartContext } from '../../src/components/context/CartContext';
import { faBed, faUserGroup, faPhone, faHouse, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const ViewRoom = ({ data, setOpenModal }) => {

    const [room, setRoom] = useState(data);
    const [index, setIndex] = useState(0);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [isAvailable, setIsAvailable] = useState(true);

    const { dispatch } = useContext(CartContext);

    // const navigate = useNavigate()

    const closeModal = () => {
        setOpenModal(false)
    }

    // Function to check room availability
  const checkAvailability = () => {
    // Simulated availability data
    const availabilityData = room.availability; // Replace with your actual data structure

    // Check if check-in and check-out dates are valid
    if (checkInDate && checkOutDate) {
      // Check if the room is available for the selected dates
      const isRoomAvailable = availabilityData.some((availability) => {
        const start = new Date(availability.startDate);
        const end = new Date(availability.endDate);
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        return checkIn >= start && checkOut <= end;
      });

      setIsAvailable(isRoomAvailable);

      if (isRoomAvailable) {
        alert('Room is available for the selected dates!');
      } else {
        alert('Room is not available for the selected dates.');
      }
    } else {
      alert('Please select valid check-in and check-out dates.');
    }
  };

  const nav = () => {

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };
  }

    return (
        <div className="room-view-container h-[100vh] m-auto fixed inset-0 bg-black 
            bg-opacity-50 backdrop-blur-sm flex justify-center items-center ">
            <div className="bg-white h-[900px] w-[960px] rounded">
                <div className='roomHearding'>
                    <p className='mt-6 ml-8 mb-[5px] font-extrabold text-lg'>{room.title}</p>
                    <p className='ml-8 mb-[-35px]'> <FontAwesomeIcon icon={faLocationDot} className=" text-[#0088a9] text-lg font-bold" /> {room.address}</p>
                </div>
                <div className="carousel mt-10 w-[900px] flex justify-center items-center">
                    <Carousel slide={false} data-bs-theme="dark" className="w-[1024px] h-[500px] border flex justify-center items-center">
                        <Carousel.Item>
                            <CarouselImage text="First slide" images={room.roomImage} />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="room-details flex">
                    <div className='flex flex-row items-center'>
                        <p className='ml-8 mt-6'><FontAwesomeIcon icon={faHouse} className=" text-[#0088a9] text-lg font-bold" /> : {room.roomType}</p>
                        <p className='ml-8 mt-6'><FontAwesomeIcon icon={faBed} className=" text-[#0088a9] text-lg font-bold" /> : {room.bedType}</p>
                        <p className='ml-8 mt-6'><FontAwesomeIcon icon={faUserGroup} className=" text-[#0088a9] text-lg font-bold" /> : {room.numberOfPeople}</p>
                        <p className='ml-8 mt-6'><FontAwesomeIcon icon={faPhone} className=" text-[#0088a9] text-lg font-bold" /> : {room.contact}</p>
                    </div>
                </div>
                <div>
                    <p className='mt-2 ml-8 mb-[5px]'>{room.description}</p>
                </div>
                <div className=' flex flex-row mr-8 justify-end items-center '>
                    <p className='mr-6 mt-6 font-bold '><FontAwesomeIcon icon={faBed} className=" text-[#0088a9] text-lg font-bold" /> : {room.price}</p>
                    <button className='bg-[#0088a9] text-white w-[140px] h-[25px] rounded ml-6' onClick={checkAvailability}>Check Availability</button>
                    <button className='bg-[#0088a9] text-white w-[140px] h-[25px] rounded ml-6' onClick={() => { dispatch({ type: 'ADD_TO_CART', id: room.id, room }) }}>Reserve Room</button>
                    <button className='bg-[#0088a9] text-white w-[30px] h-[25px] rounded ml-6 absolute top-12' onClick={closeModal}>X</button>
                </div>
            </div>
        </div>
    )
}

export default ViewRoom