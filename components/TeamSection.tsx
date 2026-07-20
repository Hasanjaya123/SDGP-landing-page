import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamMemberWithTag extends TeamMember {
  tag?: string;
}

const team: TeamMemberWithTag[] = [
  {
    id: '1',
    name: 'Hasanjaya Perera',
    role: 'Team Leader',
    bio: '',
    imageUrl: '/images/hasanjaya.jpeg',
    tag: 'Full Stack Developer & System Architect',
    socials: { linkedin: 'https://www.linkedin.com/in/hasanjaya-perera-297720244/?originalSubdomain=lk' }
  },
  {
    id: '2',
    name: 'Thinal Prabasha',
    role: 'Full Stack Developer',
    bio: '',
    imageUrl: '/images/thinal.jpeg',
    tag: 'UI Optimizations & Backend Developer',
    socials: { linkedin: 'https://www.linkedin.com/in/thinal-prabasha/?originalSubdomain=lk' }
  },
  {
    id: '3',
    name: 'Dulitha Nadith',
    role: 'Operations & Analytics',
    bio: '',
    imageUrl: '/images/dulitha.jpeg',
    tag: 'Market Research',
    socials: { linkedin: 'https://www.linkedin.com/in/dulitha-weerasinghe-6205b0335' }
  },
  {
    id: '4',
    name: 'Nadeesha Damseth',
    role: 'Frontend Developer',
    bio: '',
    imageUrl: '/images/nadeesha.jpeg',
    tag: 'UI/UX & Immersive Web',
    socials: { linkedin: 'https://www.linkedin.com/in/nadeesha-senanayake-01816b2b1' }
  },
  {
    id: '5',
    name: 'Janindu Nanayakkara',
    role: 'Frontend Developer',
    bio: '',
    imageUrl: '/images/janindu.jpeg',
    tag: 'UI/UX & Interactive Design',
    socials: { linkedin: 'https://www.linkedin.com/in/janindu-nanayakkara-666816359' }
  },
  {
    id: '6',
    name: 'Sevin Kawsika',
    role: 'Full Stack Developer',
    bio: '',
    imageUrl: '/images/sevin.jpg',
    tag: 'Recommendation Engines & WebXR Integration',
    socials: { linkedin: 'www.linkedin.com/in/sevin-kawsika-188063230' }
  }
];

export const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at original first item (index 2)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);
  const autoPlayRef = useRef<() => void>(() => { });

  // Prepend 2 items and Append 2 items to support seamless looping
  const extendedTeam = [
    team[team.length - 2],
    team[team.length - 1],
    ...team,
    team[0],
    team[1]
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(280);
      } else {
        setCardWidth(320);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex === 8 || currentIndex === 1) return; // Prevent double clicks during jumps
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 8 || currentIndex === 1) return; // Prevent double clicks during jumps
    setCurrentIndex((prev) => prev - 1);
  };

  // Silent jump resetting index 8 -> 2 and index 1 -> 7
  useEffect(() => {
    if (currentIndex === 8) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(2);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex === 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(7);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Turn transitions back on after the silent jump
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Auto play logic
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    if (!isPaused) {
      const interval = setInterval(play, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Get active index for bottom indicators (from 0 to 5)
  const activeOriginalIndex = (currentIndex - 2 + team.length) % team.length;

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] relative overflow-hidden w-full">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-orange mb-4">
          Meet Our Team
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto text-base font-medium">
          The people driving SoliasART forward with product, design, and impact operations.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-[1080px] mx-auto px-4 sm:px-8 lg:px-12 mt-8">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-orange-200 bg-white flex items-center justify-center text-brand-orange hover:bg-orange-50 hover:border-brand-orange/40 shadow-sm transition-all focus:outline-none"
          aria-label="Previous team member"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-orange-200 bg-white flex items-center justify-center text-brand-orange hover:bg-orange-50 hover:border-brand-orange/40 shadow-sm transition-all focus:outline-none"
          aria-label="Next team member"
        >
          <ChevronRight size={20} />
        </button>

        {/* Viewport */}
        <div
          className="overflow-hidden py-10 w-[280px] sm:w-[320px] lg:w-[960px] mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : 'transition-none'}`}
            style={{
              position: 'relative',
              left: '50%',
              transform: `translateX(calc(-${cardWidth / 2}px - ${currentIndex * cardWidth}px))`,
              width: `${extendedTeam.length * cardWidth}px`,
            }}
          >
            {extendedTeam.map((member, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={`${member.id}-${index}`}
                  style={{ width: `${cardWidth}px` }}
                  className="flex-shrink-0 px-3 transition-all duration-500 ease-out"
                >
                  <div
                    className={`bg-white rounded-2xl p-4 transition-all duration-500 ease-out border flex flex-col h-full ${isActive
                      ? 'scale-105 md:scale-110 shadow-2xl border-brand-orange/80 ring-4 ring-brand-orange/10 z-10 opacity-100'
                      : 'scale-95 opacity-90 border-slate-200/80 shadow-sm hover:opacity-100'
                      }`}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-slate-50 border border-slate-100">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>

                    {/* Member Info */}
                    <div className="flex-grow flex flex-col items-start text-left">
                      <h3 className="text-lg font-bold text-slate-800 tracking-tight">{member.name}</h3>
                      <p className="text-sm font-semibold text-slate-500 mt-0.5">{member.role}</p>

                      {/* Tag Badge */}
                      {member.tag && (
                        <div className="mt-3 flex">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-orange-50 text-brand-orange border border-brand-orange/20 shadow-sm">
                            {member.tag}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index + 2)}
              className={`transition-all duration-300 h-2 rounded-full ${index === activeOriginalIndex ? 'w-6 bg-brand-orange' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};