import React, { useEffect, useState } from 'react';
import axios from 'axios'

import VendorCard from './VendorCard';
import Modal from '../../modal/modal';

const ServiceCard = ({ service, vendors }) => {
  // console.log(vendors);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // default vendor = first vendor in the list
  const [selectedVendor, setSelectedVendor] = useState(vendors);

  if (!service) return null;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleVendorSelect = (vendor) => {
    setSelectedVendor(vendor);
    closeModal();
  };

  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-10 space-y-8 lg:space-y-0">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center lg:col-span-1">
          <h2 className="text-5xl font-bold text-gray-900">{service}</h2>
          {/* <p className="mt-4 text-md text-gray-600 max-w-md">{service.tagline}</p> */}
        </div>

        {/* RIGHT SIDE */}
        <div>
          <VendorCard
            vendor={selectedVendor}
            openModal={openModal}
          />
        </div>

      </div>

      {/* MODAL */}
      {isModalOpen && (
        <Modal
          vendors={vendors}
          onClose={closeModal}
          onSelect={handleVendorSelect}
        />
      )}
    </>
  );
};

export default ServiceCard;
