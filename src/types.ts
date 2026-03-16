import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
}
