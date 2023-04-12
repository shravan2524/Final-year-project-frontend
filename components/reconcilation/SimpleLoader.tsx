import React from 'react';

interface SimpleLoaderPropTypes {
  isLoading: boolean
  text: string
}
export default function SimpleLoader({ isLoading, text }: SimpleLoaderPropTypes) {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="container mb-4 text-center justify-content-md-center">
      <div className="text-center">
        <i className="fas fa-spinner fa-spin" />
      </div>
      <div className="text-center">
        <small>{text}</small>
      </div>
    </div>
  );
}
