import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Services() {
  return (
    <AuthenticatedLayout>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Diensten</h1>
        <p className="text-lg">
          Ontdek onze professionele diensten die speciaal zijn ontworpen om jouw bedrijf te helpen
          groeien. We bieden op maat gemaakte oplossingen voor vastgoedbeheer en -ontwikkeling.
        </p>
      </div>
    </AuthenticatedLayout>
  );
}