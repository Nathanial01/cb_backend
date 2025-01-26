import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function About() {
  return (
    <AuthenticatedLayout>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Over Ons</h1>
        <p className="text-lg">
          Welkom bij onze over ons pagina. Hier ontdek je wie wij zijn en wat we doen. Wij zijn een
          bedrijf dat innovatieve oplossingen biedt voor vastgoedbeheer, en we streven ernaar om de
          best mogelijke diensten aan te bieden aan onze klanten.
        </p>
      </div>
    </AuthenticatedLayout>
  );
}