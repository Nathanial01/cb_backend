import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

gsap.registerPlugin(ScrollTrigger);

export default function Toepassing() {
  const directions = [
    {
      id: 0,
      title: "Stapen",
      description: "",
    }, 
    {
      id: 1,
      title: "Voorbereiding",
      description: "Zorg voor een geschikte werkruimte en laad je LiDAR-apparaat op.",
    }, {
      id: 2,
      title: "Scanlocatie",
      description: "Kies de locatie waar de scan moet worden uitgevoerd en positioneer het apparaat.",
    },
    {
      id: 3,
      title: "Scannen starten",
      description: "Activeer het apparaat en volg de instructies op het scherm.",
    },
    {
      id: 4,
      title: "Data exporteren",
      description: "Exporteer de gescande gegevens naar je computer of cloud.",
    },
    {
      id: 5,
      title: "Controle",
      description: "Analyseer en controleer de gescande gegevens in de software.",
    },
    {
      id: 6,
      title: "Controle",
      description: "Analyseer en controleer de gescande gegevens in de software.",
    },
    {
      id: 7,
      title: "Controle",
      description: "Analyseer en controleer de gescande gegevens in de software.",
    },
    {
      id: 8,
      title: "Controle",
      description: "Analyseer en controleer de gescande gegevens in de software.",
    },
  ];

  const sectionsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Animate when 80% of the section enters the viewport
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    });

    // Set up ScrollTrigger for vertical line to animate based on the steps
    ScrollTrigger.create({
      trigger: sectionsRef.current[0], // First section trigger
      start: "top top", // Start the trigger when the first section hits the top
      end: "bottom bottom", // End when the last section hits the bottom
      scrub: 1,
      onUpdate: (self) => {
        const circleElements = sectionsRef.current.map((section) =>
          section.querySelector(".step-circle")
        );

        let totalHeight = 0;
        let prevCircleBottom = 0;

        // Loop through each circle to calculate the total height for the line
        circleElements.forEach((circle, index) => {
          const circleRect = circle.getBoundingClientRect();
          const circleCenterY = circleRect.top + circleRect.height / 2;

          if (index === 0) {
            gsap.set(lineRef.current, { top: circleCenterY + "px" });
          }

          if (index > 0) {
            const distance = circleCenterY - prevCircleBottom;
            totalHeight += distance;
          }

          prevCircleBottom = circleCenterY;
        });

        // Animate the line height dynamically
        gsap.to(lineRef.current, {
          height: totalHeight + "px",
          ease: "power2.out",
        });
      },
    });
  }, []);

  return (
    <AuthenticatedLayout>
      <div className="relative py-16 mt-24 ">
        <div className="container mx-auto flex flex-col items-center relative">
          {/* Vertical Line */}
          <div
            ref={lineRef}
            className="absolute top-0 w-1 bg-gray-300 dark:bg-gray-600 left-1/2 transform -translate-x-1/2"
          ></div>

          {/* Steps */}
          {directions.map((direction, index) => (
            <div
              key={direction.id}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="relative w-3/4 lg:w-2/4 py-16 text-center flex flex-col items-center"
            >
              {/* Step Number (Circle) */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 -top-10 bg-yellow-300 dark:bg-yellow-500 text-gray-900 dark:text-gray-900 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-lg font-semibold step-circle"
              >
                {index + 1}
              </div>

              {/* Step Content */}
              <div className="bg-gray-300 dark:bg-gray-500 text-gray-900 dark:text-gray-900 p-4 rounded-lg shadow-md">
                <h2 className="text-xl lg:text-xl font-semibold mb-4">
                  {direction.title}
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {direction.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}