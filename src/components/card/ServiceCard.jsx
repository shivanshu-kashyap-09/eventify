import React, { useState } from 'react';
import VendorCard from './VendorCard';
import Modal from '../../modal/modal';

const ServiceCard = ({ service, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ⭐ The vendor that will show on the card
  const [selectedVendor, setSelectedVendor] = useState(service.vendor);

  if (!service) return null;

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // When Add button in modal clicked
  const handleVendorSelect = (vendor) => {
    setSelectedVendor(vendor);  // ⭐ Update vendor shown in card
    setIsModalOpen(false);      // Close modal
  };

  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-10 space-y-8 lg:space-y-0">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center lg:col-span-1">
          <h2 className="text-5xl font-bold text-gray-900">{service.title}</h2>
          <p className="mt-4 text-md text-gray-600 max-w-md">{service.tagline}</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2">
          <VendorCard
            vendor={selectedVendor}  // ⭐ Updated vendor shown here
            onClose={onClose}
            openModal={openModal}
          />
        </div>

      </div>

      {/* MODAL */}
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSelect={handleVendorSelect}  // ⭐ Add button callback
        />
      )}
    </>
  );
};

export default ServiceCard;
