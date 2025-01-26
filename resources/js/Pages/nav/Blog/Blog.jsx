import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Blog() {
  return (
    <AuthenticatedLayout>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg">
          Lees onze blogposts en blijf op de hoogte van het laatste nieuws en trends in de vastgoedsector.
        </p>
      </div>
    </AuthenticatedLayout>
  );
}