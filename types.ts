export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface Partner {
  id: string;
  name: string;
  type: 'Gallery' | 'Technology' | 'Logistics' | 'Strategic';
  description: string;
  logoUrl: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}