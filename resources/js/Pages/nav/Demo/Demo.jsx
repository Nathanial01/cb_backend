import React, { useEffect, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { gsap } from "gsap";
import WorkStation from "@/Components/WorkStation";

export default function Demo() {
  const formRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [contentRef.current, formRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <AuthenticatedLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl w-full mx-auto p-6">
          {/* Left Content Section */}
          <div
            ref={contentRef}
            className="p-8 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Vraag een gratis demo aan
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Zien is geloven! Plan een live demo met een van onze
              productspecialisten op een moment dat jou uitkomt. Ontdek je
              vereisten, stel vragen en leer hoe ons product je organisatie kan
              helpen.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Vul hieronder je gegevens in en we nemen snel contact met je op
              om je live demo in te plannen.
            </p>
          </div>

          {/* Right Form Section */}
          <div
            ref={formRef}
            className="p-8 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
          >
            <form
              method="post"
              action="/submit-form"
              className="space-y-6"
              encType="multipart/form-data"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Vul je gegevens in
              </h2>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-900 dark:text-white mb-2"
                >
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="email@bedrijf.com"
                  className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Voornaam <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Achternaam <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-medium text-gray-900 dark:text-white mb-2"
                >
                  Telefoon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Bijv. +31234567890"
                  className="w-full h-12 px-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Country Field */}
              <div>
                <label
                  htmlFor="country"
                  className="block font-medium text-gray-900 dark:text-white mb-2"
                >
                  Land <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  className="w-full h-12 px-4 rounded-lg text-gray-900 dark:text-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="" disabled>
                    -- Selecteer een land --
                  </option>
                  <option value="NL">Nederland</option>
                  <option value="BE">België</option>
                  <option value="DE">Duitsland</option>
                  <option value="FR">Frankrijk</option>
                  <option value="UK">Verenigd Koninkrijk</option>
                  <option value="US">Verenigde Staten</option>
                </select>
              </div>

              {/* Additional Information */}
              <div>
                <label
                  htmlFor="description"
                  className="block font-medium text-gray-900 dark:text-white mb-2"
                >
                  Aanvullende informatie
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Voeg aanvullende informatie toe..."
                  className="w-full px-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-600"
              >
                Versturen
              </button>
            </form>
          </div>
        </div>
      </div>
        {/* WorkStation Component */}
        <div className="mb-40">
          <WorkStation />
        </div>  
    </AuthenticatedLayout>
  );
}