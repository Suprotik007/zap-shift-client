import React from 'react';

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="card w-full bg-base-100 shadow-md border hover:shadow-lg transition-all">
      <div className="card-body flex flex-col sm:flex-row items-start gap-4">
        <img src={image} alt={title} className="h-30 object-contain" />
        <div className="divider divider-horizontal divider-neutral hidden sm:flex my-0" />
        <div>
          <h3 className="card-title text-[#03373D] text-2xl mb-2">{title}</h3>
          <p className="text-sm font-semibold text-left text-base-content/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;