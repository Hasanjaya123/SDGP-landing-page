import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Hasanjaya Perera',
    role: 'Team Leader',
    bio: 'Visionary leader guiding the strategic direction and development of the SoliasArt platform.',
    imageUrl: 'C:\Users\viber\OneDrive\Pictures\Google antigravity\Solius art\soliasart\images\hasanjaya.jpg',
    socials: { linkedin: 'https://www.linkedin.com/in/hasanjaya-perera-297720244/?originalSubdomain=lk', twitter: '#' }
  },
  {
    id: '2',
    name: 'Thinal Prabasha',
    role: 'Tech Lead',
    bio: 'Expert in scalable architecture and full-stack development, driving the technical vision.',
    imageUrl: '',
    socials: { linkedin: 'https://www.linkedin.com/in/thinal-prabasha/?originalSubdomain=lk' }
  },
  {
    id: '3',
    name: 'Dulitha Nadith',
    role: 'Lead Designer',
    bio: 'Crafting intuitive and beautiful user experiences that bridge art and technology.',
    imageUrl: '',
    socials: { linkedin: '#' }
  },
  {
    id: '4',
    name: 'Senanayake Arachchige',
    role: 'AI Specialist',
    bio: 'Focusing on computer vision algorithms and recommendation engines.',
    imageUrl: '',
    socials: { linkedin: '#' }
  },
  {
    id: '5',
    name: 'Kariyawasam Godakandage',
    role: 'Mobile Developer',
    bio: 'Ensuring a seamless and responsive experience across all mobile devices.',
    imageUrl: '',
    socials: { linkedin: '#' }
  },
  {
    id: '6',
    name: 'Sevin Kawsika',
    role: 'Marketing Strategist',
    bio: 'Connecting the platform with artists and collectors to grow the community.',
    imageUrl: '',
    socials: { linkedin: '#' }
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-br from-indigo-950 via-brand-dark to-indigo-950 text-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-cyan font-bold tracking-widest text-xs uppercase mb-2 block">The Visionaries</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">The Team behind the project</h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed border-l-2 border-brand-orange pl-4">
            Our team of 6 combines deep industry knowledge of the Asian art market with world-class technical expertise in AI and immersive media.
          </p>
        </div>

        {/* Updated grid to lg:grid-cols-6 to show all in one row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto">
          {team.map((member) => (
            <div key={member.id} className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 shadow-lg">
              <div className="h-40 w-full overflow-hidden relative">
                 <div className="absolute inset-0 bg-brand-orange/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-serif font-bold mb-1 truncate text-white" title={member.name}>{member.name}</h3>
                <p className="text-brand-orange text-[9px] font-bold uppercase tracking-wide mb-2 truncate" title={member.role}>{member.role}</p>
                <p className="text-gray-400 text-[10px] leading-relaxed mb-3 line-clamp-3 group-hover:text-gray-200 transition-colors">{member.bio}</p>
                
                <div className="flex gap-3 pt-2 border-t border-white/10">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-gray-500 hover:text-brand-cyan transition-colors">
                      <Linkedin size={14} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-gray-500 hover:text-brand-cyan transition-colors">
                      <Twitter size={14} />
                    </a>
                  )}
                  {member.socials.website && (
                    <a href={member.socials.website} className="text-gray-500 hover:text-brand-cyan transition-colors">
                      <Globe size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};