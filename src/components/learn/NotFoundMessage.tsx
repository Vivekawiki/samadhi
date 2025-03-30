
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';

interface NotFoundMessageProps {
  title: string;
  message: string;
  backTo: string;
  backLabel: string;
}

const NotFoundMessage: React.FC<NotFoundMessageProps> = ({ 
  title, 
  message, 
  backTo, 
  backLabel 
}) => {
  return (
    <PageLayout title={title}>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-heading font-bold mb-6">{title}</h1>
        <p className="text-gray-600 mb-8">{message}</p>
        <Link to={backTo} className="text-spiritual-500 hover:text-spiritual-600 font-medium">
          ← {backLabel}
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFoundMessage;
