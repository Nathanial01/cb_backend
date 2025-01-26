import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

export default function Prijzen() {
    const plans = [
        {
            title: "Freemium",
            price: "FREE",
            description: "3D scan",
            features: [
                "2D scan (zonder maatvoering)",
                "Scans opslaan (max 1)",
            ],
            buttonText: "Start nu",
        },
        {
            title: "Basic",
            price: "€ 9,99 / maand",
            description: "3D scan",
            features: [
                "2D scan (met maatvoering) - € 4,99 per credit",
                "Scans opslaan (max...)", 
            ],
            buttonText: "Abonneer",
        },
        {
            title: "Premium",
            price: "€ 14,99 / maand",
            description: "3D scan",
            features: [
                "2D scan (met maatvoering) - € 4,50 per credit",
                "Achteraf meten binnen de 2D en 3D scan",
                "Exportfunctie voor data (ruimtes en maten) in Excel",
                "Scans opslaan (max...)", 
                "Multi-userfunctie (5 gebruikers)",
            ],
            buttonText: "Probeer gratis",
        },
        {
            title: "Premium PRO",
            price: "POA",
            description: "3D scan",
            features: [
                "2D scan (met maatvoering)",
                "3D scans voorzien van POI's en links",
                "Achteraf meten binnen de 2D en 3D scan",
                "Exportfunctie voor data (ruimtes en maten) in Excel",
                "Scans opslaan (max...)", 
                "Library structuur en gebruikersbeheer",
                "Multi-userfunctie",
            ],
            buttonText: "Neem contact op",
        },
    ];

    const headers = ["Features", "Freemium", "Basic", "Premium", "Premium PRO"];
    const rows = [
        {
            feature: "2D scan zonder maatvoering",
            values: ["check", "cross", "cross", "check"],
        },
        {
            feature: "2D scan met maatvoering",
            values: ["cross", "€ 4,99 / credit", "€ 4,50 / credit", "check"],
        },
        {
            feature: "Scans opslaan",
            values: ["1", "max...", "check", "check"],
        },
        {
            feature: "Achteraf meten in scans",
            values: ["cross", "cross", "check", "check"],
        },
        {
            feature: "Multi-userfunctie",
            values: ["cross", "cross", "5 gebruikers", "check"],
        },
    ];

        const PricingPlan = ({ title, price, description, features, buttonText }) => (
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition ${ index}'">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mt-4">{price}</div>
                    <p className="mt-2 text-center text-gray-600 dark:text-gray-300">{description}</p>
                    <a
                        href="#"
                        className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
                    >
                        {buttonText}
                    </a>
                </div>
                <div className="mt-6">
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                                <i className="bi bi-check2-circle text-green-500 mr-2"></i>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );

    const TableHeader = ({ headers }) => (
        <thead className="sticky top-0 bg-gray-100 dark:bg-gray-800">
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className={`px-6 py-4 text-center font-bold${
                index === 3 ? "bg-green-500 dark:bg-green-500 " : " text-gray-700 dark:text-gray-100 border-l border-gray-200 dark:border-gray-700 "
              }`} 
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
    );

    const TableRow = ({ feature, values }) => (
        <tr className="bg-none hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{feature}</td>
        {values.map((value, index) => (
          <td
            key={index}
            className={`px-6 py-4 text-center border-l border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 ${
              index === 2 ? "bg-green-300 dark:bg-green-900  text-gray-900 dark:text-gray-300 " : ""
            }`}
          >
            {value === "check" ? (
              <i className="bi bi-check2 text-green-500 "></i>
            ) : value === "cross" ? (
              <i className="bi bi-x-lg text-red-500"></i>
            ) : (
              value
            )}
          </td>
        ))}
      </tr>
    );

    return (
        <AuthenticatedLayout>
            <Head>
                <title>Prijzen - ImmoScan</title>
            </Head>

            <section className="py-12 bg-gray-200 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center py-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Onze mogelijkheden en prijzen
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Kies een plan dat past bij jouw behoeften en ontdek hoe eenvoudig en snel je 3D- en 2D-scans kunt beheren.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {plans.map((plan, index) => (
                            <PricingPlan key={index} {...plan} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-200 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                            Vergelijk onze plannen
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                            Bekijk de verschillen tussen onze plannen en kies het pakket dat het beste bij je past.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border-collapse">
                            <TableHeader headers={headers} />
                            <tbody>
                                {rows.map((row, index) => (
                                    <TableRow key={index} feature={row.feature} values={row.values} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}