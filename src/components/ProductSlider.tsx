import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import all images
import ltPanel from "../assets/lt-panels.jpeg";
import apfcPanel from "../assets/apfc-panels.png";
import controlPanel from "../assets/electric-control-panel.webp";
import acdbBox from "../assets/acdb_box.webp";
import vfdPanel from "../assets/vfd-control-panel.png";
import distributionPanel from "../assets/distributor_panel.jpg";
import dcdbBox from "../assets/dcdb_box.png";
import plcPanel from "../assets/plc_panel.jpeg";
import amfPanel from "../assets/amf_panel.webp";
import solarStringMonitoring from "../assets/solar_string_monitoring.jpg";


const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: "Main LT Panel",
      description: "High-quality Main Low Tension electrical panels for industrial applications",
      image: ltPanel,
    },
    {
      id: 2,
      name: "APFC Panel",
      description: "Automatic Power Factor Correction panels for power optimization",
      image: apfcPanel,
    },
    {
      id: 3,
      name: "Control Panel",
      description: "Advanced control panels for industrial automation and monitoring",
      image: controlPanel,
    },
    {
      id: 4,
      name: "Solar ACDB",
      description: "Solar AC Distribution Boxes for solar power systems",
      image: acdbBox,
    },
    {
      id: 5,
      name: "VFD Panel",
      description: "Variable Frequency Drive panels for motor control applications",
      image: vfdPanel,
    },
    {
      id: 6,
      name: "Distribution Panel",
      description: "Electrical distribution panels for power distribution systems",
      image: distributionPanel,
    },
    {
      id: 7,
      name: "Solar DCDB",
      description: "Solar DC Distribution Boxes for photovoltaic systems",
      image: dcdbBox,
    },
    {
      id: 8,
      name: "PLC Automation Panel",
      description: "PLC-based automation and control systems",
      image: plcPanel,
    },
    {
      id: 9,
      name: "AMF Panel",
      description: "Auto Mains Failure panels for backup generator systems",
      image: amfPanel,
    },
    {
      id: 10,
      name: "Solar String Monitoring",
      description: "Advanced solar string monitoring and management systems",
      image: solarStringMonitoring,
    },
  ];

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [products.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="relative w-full max-w-lg mx-auto mt-12">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Products</span>
        </h3>

        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-full flex-shrink-0">
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-lg font-bold mb-2">{product.name}</h4>
                    <p className="text-sm text-blue-200 line-clamp-2">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-yellow-400 w-6" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Product counter */}
        <div className="text-center mt-4">
          <span className="text-blue-200 text-sm">
            {currentSlide + 1} of {products.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
