/*
  File Name: components/Services/index.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Services List/Page Component
*/

import services from "../../data/services.js";
import ServiceCard from "./ServiceCard";
export default function Services() {
  return (
    <section className="bg-white py-4 sm:py-8">
      <div className="mx-auto max-w-7xl px-8 lg:px-16">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl font-bold tracking-tight text-orange-500">
            Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            I offer a wide range of services that are flexible enough to fit
            your business and individual needs
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-2xl sm:mt-8 lg:mt-12 lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
