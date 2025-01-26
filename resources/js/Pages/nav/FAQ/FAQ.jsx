import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Faq() {
  return (
    <AuthenticatedLayout>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Veelgestelde Vragen</h1>
        <p className="text-lg">
          Heb je vragen? Bekijk de antwoorden op veelgestelde vragen over onze diensten en producten.
        </p>
      </div>
    </AuthenticatedLayout>
  );
}