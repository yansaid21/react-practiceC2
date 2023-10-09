import React from "react";
import { ServicesList } from "../components/ServicesList";
import { images } from "../assets";
import "./Services.scss";

export const Services = () => {
  const services = [
    {
      _id: "1",
      nameService: "Servicio 1",
      serviceDescription: "Descripción del servicio 1",
      avatar: images.service1,
    },
    {
      _id: "2",
      nameService: "Servicio 2",
      serviceDescription: "Descripción del servicio 2",
      avatar: images.service2,
    },
    {
      _id: "3",
      nameService: "Servicio 3",
      serviceDescription: "Descripción del servicio 3",
      avatar: images.service3,
    },
    {
      _id: "4",
      nameService: "Servicio 4",
      serviceDescription: "Descripción del servicio 4",
      avatar: images.service4,
    },
    {
      _id: "5",
      nameService: "Servicio 5",
      serviceDescription: "Descripción del servicio 5",
      avatar: images.service1,
    },
  ];
  return (
    <div className="services-page-content">
      <ServicesList servicesParam={services}></ServicesList>
    </div>
  );
};
