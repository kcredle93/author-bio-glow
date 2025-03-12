import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Heart, Star } from "lucide-react";
import { ArticleList } from '@/components/ArticleList';

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Header Section with subtle background */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sapphire/10 to-mist pointer-events-none" aria-hidden="true"></div>
        <div className="container mx-auto px-6 pt-16 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Top badge */}
            <div className="flex justify-center mb-8 opacity-0 animate-fade-in animate-delay-100">
              <Badge className="bg-sapphire hover:bg-sapphire/90 text-white px-4 py-1 text-sm font-medium">
                Author Bio
              </Badge>
            </div>

            {/* Author name and title container */}
            <div className="text-center mb-12 opacity-0 animate-fade-in animate-delay-200">
              <h1 className="text-5xl sm:text-6xl font-bold text-midnight tracking-tight mb-4">
                Alex Morgan
              </h1>
              <p className="text-xl sm:text-2xl text-sapphire font-medium">
                Design Philosopher & Technology Writer
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 max-w-6xl mx-auto">
            {/* Left column with image */}
            <div className="md:col-span-5 opacity-0 animate-scale-in animate-delay-300">
              <div className="image-container shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Alex Morgan"
                  className="w-full h-auto rounded-2xl object-cover aspect-[3/4]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right column with content */}
            <div className="md:col-span-7 flex flex-col justify-between">
              {/* Description */}
              <div className="mb-12 opacity-0 animate-fade-in-up animate-delay-400">
                <h2 className="text-2xl font-semibold text-midnight mb-6">About</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    I explore the intersection of human psychology and digital products, focusing on how design principles influence our daily interactions with technology.
                  </p>
                  <p>
                    With over a decade of experience in both academic research and industry practice, my work bridges the gap between theoretical understanding and practical application of user-centered design.
                  </p>
                  <p>
                    My writing has been featured in leading technology publications, and I frequently speak at international conferences on design ethics, accessibility, and the future of human-computer interaction.
                  </p>
                </div>
              </div>

              {/* Expertise section */}
              <div className="opacity-0 animate-fade-in-up animate-delay-500">
                <h2 className="text-2xl font-semibold text-midnight mb-6">Expertise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Expertise cards */}
                  <ExpertiseCard 
                    icon={<GraduationCap className="h-5 w-5" />}
                    title="Education"
                    description="Ph.D. in Human-Computer Interaction, Stanford University"
                    color="bg-sapphire/10"
                    iconColor="text-sapphire"
                  />
                  <ExpertiseCard 
                    icon={<Briefcase className="h-5 w-5" />}
                    title="Experience"
                    description="Principal Design Researcher at Future Labs (2018-Present)"
                    color="bg-amber/10"
                    iconColor="text-amber"
                  />
                  <ExpertiseCard 
                    icon={<Star className="h-5 w-5" />}
                    title="Specialization"
                    description="Cognitive Psychology, Interface Design, AI Ethics"
                    color="bg-orange/10"
                    iconColor="text-orange"
                  />
                  <ExpertiseCard 
                    icon={<Heart className="h-5 w-5" />}
                    title="Passion"
                    description="Creating technology that enhances human potential"
                    color="bg-midnight/10"
                    iconColor="text-midnight"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-16 bg-gradient-to-r from-sapphire/5 to-mist">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center opacity-0 animate-blur-in animate-delay-500">
            <blockquote className="text-2xl md:text-3xl font-medium italic text-midnight leading-relaxed mb-6">
              "Great design is not just what it looks like. Great design is how it works, how it makes you feel, and ultimately, how it enhances your life."
            </blockquote>
            <p className="text-sapphire font-medium">— Alex Morgan</p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="opacity-0 animate-fade-in-up animate-delay-600">
            <ArticleList />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-sapphire/60">
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

// Expertise card component
const ExpertiseCard = ({ icon, title, description, color, iconColor }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: string;
  iconColor: string;
}) => {
  return (
    <Card className={`expertise-badge p-4 border-none ${color}`}>
      <div className="flex gap-4">
        <div className={`mt-0.5 ${iconColor}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-midnight mb-1">{title}</h3>
          <p className="text-sm text-midnight/80">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default Index;
