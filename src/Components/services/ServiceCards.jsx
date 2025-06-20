import React from 'react';

const ServiceCard = ({ service }) => {
    const {icon: Icon, title, description} = service
  return (
    <div className="bg-white justify-center shadow-md rounded-2xl p-6 border hover:bg-[#CAEB66] transition-all duration-300">
      <div className="text-5xl w-3/12 mx-auto text-neutral mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
      <p className="text-gray-600 font-semibold">{description}</p>
    </div>
  );
};

export default ServiceCard;