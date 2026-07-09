import React, { useState } from 'react';
import { Smartphone, Sparkles, QrCode, Play, Check, ShieldAlert, Minimize2, Move, Focus } from 'lucide-react';

interface Artwork {
  id: string;
  title: string;
  artist: string;
  size: string;
  price: string;
  image: string;
  videoId: string;
  roomType: string;
}

const ARTWORKS: Artwork[] = [
  {
    id: 'art-1',
    title: 'Nebula Echoes',
    artist: 'Sithara Senanayake',
    size: '36" × 48"',
    price: '$1,250',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=600',
    videoId: 'HA3RgGR-9XQ',
    roomType: 'Modern Living Room'
  },
  {
    id: 'art-2',
    title: 'Kandyan Grace',
    artist: 'Manoj De Silva',
    size: '40" × 60"',
    price: '$2,800',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600',
    videoId: 'HA3RgGR-9XQ',
    roomType: 'Exhibition Gallery'
  },
  {
    id: 'art-3',
    title: 'Colpetty Skyline Abstract',
    artist: 'Amara Perera',
    size: '30" × 30"',
    price: '$950',
    image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&q=80&w=600',
    videoId: 'HA3RgGR-9XQ',
    roomType: 'Minimalist Dining Area'
  }
];

export const ArPreviewSection: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork>(ARTWORKS[0]);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [isCalibrating, setIsCalibrating] = useState<boolean>(false);

  const handleArtworkSelect = (artwork: Artwork) => {
    setIsCalibrating(true);
    setSelectedArtwork(artwork);
    // Simulate a brief sensor calibration effect when switching artworks
    setTimeout(() => {
      setIsCalibrating(false);
    }, 800);
  };

  return (
    <section id="ar-try-on" className="py-24 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

      <div className="container mx-auto px-6">
        {/* Title / Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange font-bold tracking-widest text-xs uppercase mb-2 block flex items-center justify-center gap-1">
            <Sparkles size={14} className="animate-spin-slow" /> Immersive Visualization
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
            See Masterpieces on <span className="text-brand-violet italic">Your Walls</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Say goodbye to size anxiety. Select any artwork below and visualize it instantly in a high-fidelity virtual space to scale.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Clickable Artwork Rectangle Side Windows */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-brand-dark mb-1">Available Artworks</h3>
              <p className="text-gray-500 text-sm">Click a window below to project the artwork into the AR simulator.</p>
            </div>

            <div className="space-y-4">
              {ARTWORKS.map((art) => {
                const isSelected = selectedArtwork.id === art.id;
                return (
                  <div
                    key={art.id}
                    onClick={() => handleArtworkSelect(art)}
                    className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border bg-white flex items-center gap-5 shadow-sm group ${
                      isSelected
                        ? 'border-brand-orange ring-2 ring-brand-orange/20 shadow-md translate-x-2'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow hover:translate-x-1'
                    }`}
                  >
                    {/* Rectangle Window (Artwork Thumbnail) */}
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100 shadow-inner">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                      
                      {/* Play overlay indicator */}
                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center bg-brand-orange/30 backdrop-blur-[2px]">
                          <Play size={20} fill="#fff" className="text-white animate-pulse" />
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-lg text-brand-dark group-hover:text-brand-orange transition-colors">
                            {art.title}
                          </h4>
                          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                            By {art.artist}
                          </p>
                        </div>
                        <span className="font-bold text-brand-teal text-lg">{art.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                        <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">
                          {art.size}
                        </span>
                        <span className="flex items-center gap-1 text-brand-violet font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse"></span>
                          AR Calibrated
                        </span>
                      </div>
                    </div>

                    {/* Selection Dot */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                      isSelected 
                        ? 'bg-brand-orange border-brand-orange text-white scale-110' 
                        : 'border-gray-300 group-hover:border-gray-400'
                    }`}>
                      {isSelected && <Check size={14} strokeWidth={3} />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile App Callout Card */}
            <div className="p-6 rounded-2xl bg-brand-dark text-white relative overflow-hidden shadow-xl mt-8">
              <div className="absolute -right-8 -bottom-8 opacity-10 transform rotate-12 text-white">
                <Smartphone size={160} />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-brand-tangerine">
                  <Smartphone size={20} />
                  <span className="text-xs uppercase font-bold tracking-wider">SoliasArt Mobile AR</span>
                </div>
                <h4 className="text-xl font-serif font-bold">Want to try it in your own home?</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Scan the live calibration code to launch SoliasArt AR directly inside your mobile browser. Place real paintings on your actual walls in 3D.
                </p>
                <button
                  onClick={() => setShowQrModal(true)}
                  className="bg-brand-orange text-white hover:bg-brand-orange/90 font-bold px-6 py-2.5 rounded-xl text-sm transition-all duration-300 flex items-center gap-2 shadow-lg shadow-brand-orange/20"
                >
                  <QrCode size={16} /> Get AR Scanner
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Mock Smartphone Device with YouTube Shorts Iframe */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] select-none">
              
              {/* Floating stats badge - Left */}
              <div className="absolute -left-12 top-24 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl p-4 z-20 hidden md:block animate-float w-44">
                <div className="flex items-center gap-2 text-brand-orange mb-1">
                  <Focus size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Surface Sensor</span>
                </div>
                <p className="font-bold text-xs text-brand-dark">AR Engine Calibrated</p>
                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-brand-orange h-full rounded-full w-[92%]"></div>
                </div>
              </div>

              {/* Floating stats badge - Right */}
              <div className="absolute -right-12 bottom-24 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl p-4 z-20 hidden md:block animate-float-delayed w-44">
                <div className="flex items-center gap-2 text-emerald-500 mb-1">
                  <Move size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Wall Placement</span>
                </div>
                <p className="font-bold text-xs text-brand-dark">Scale Ratio: 1:1 Actual</p>
                <p className="text-[10px] text-gray-500 mt-1">Accuracy: ±0.5 inches</p>
              </div>

              {/* Phone Outer Shell */}
              <div className="relative mx-auto w-full aspect-[9/18.5] rounded-[48px] border-[12px] border-brand-dark bg-black shadow-2xl overflow-hidden ring-4 ring-slate-800/20">
                {/* Notch / Speaker */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-dark rounded-b-2xl z-30 flex items-center justify-center">
                  <span className="w-12 h-1 bg-gray-800 rounded-full"></span>
                </div>

                {/* AR Viewfinder Simulation Layer */}
                <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-4">
                  {/* Top Bar Indicators */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-bold text-white flex items-center gap-1.5 border border-white/10">
                      <span className={`w-2 h-2 rounded-full ${isCalibrating ? 'bg-amber-400 animate-ping' : 'bg-red-500 animate-pulse'}`}></span>
                      {isCalibrating ? 'CALIBRATING...' : 'LIVE AR PREVIEW'}
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-mono text-gray-300 border border-white/5">
                      9:16 FHD
                    </div>
                  </div>

                  {/* Calibration Overlay */}
                  {isCalibrating && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px] flex flex-col items-center justify-center z-20">
                      <div className="w-10 h-10 border-4 border-t-brand-orange border-r-brand-orange border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                      <p className="text-xs text-white font-bold tracking-wider mt-3 font-mono">Calibrating Room...</p>
                    </div>
                  )}

                  {/* Center Scanning Guide Reticle */}
                  <div className="flex-grow flex items-center justify-center">
                    <div className="w-32 h-44 border border-dashed border-white/30 rounded-xl relative flex items-center justify-center">
                      <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-brand-orange"></div>
                      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-brand-orange"></div>
                      <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-brand-orange"></div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-brand-orange"></div>
                      <span className="text-[9px] text-white/50 uppercase tracking-widest font-mono select-none">AR Target Area</span>
                    </div>
                  </div>

                  {/* Bottom Bar Info Card */}
                  <div className="w-full bg-black/75 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center gap-3">
                    <img 
                      src={selectedArtwork.image} 
                      alt="" 
                      className="w-10 h-10 rounded object-cover border border-white/20"
                    />
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between">
                        <h5 className="text-[11px] font-bold text-white truncate">{selectedArtwork.title}</h5>
                        <span className="text-[10px] font-bold text-brand-tangerine">{selectedArtwork.price}</span>
                      </div>
                      <p className="text-[9px] text-gray-400 truncate">By {selectedArtwork.artist} • {selectedArtwork.size}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-[8px] font-bold uppercase tracking-wider text-emerald-400">Tracking Confirmed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Embedded YouTube Shorts Video Frame */}
                {/* Embedded correctly using standard /embed/ with parameters for seamless replay */}
                <div className="w-full h-full bg-gray-900 select-none pointer-events-auto">
                  <iframe
                    className="w-full h-full object-cover scale-[1.03] origin-center"
                    src={`https://www.youtube.com/embed/${selectedArtwork.videoId}?autoplay=1&mute=1&loop=1&playlist=${selectedArtwork.videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
                    title="SoliasArt AR Video Demonstration"
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                    style={{ border: 'none' }}
                  />
                </div>

              </div>

              {/* Decorative phone shadow base */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/20 blur-xl rounded-full"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Try-On Your Phone QR Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative overflow-hidden border border-gray-100 animate-scale-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <span className="text-lg font-bold">&times;</span>
            </button>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto">
                <QrCode size={32} />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-serif font-bold text-brand-dark">Scan to Try in AR</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Open your mobile camera or barcode scanner app and point it at the QR code below to launch the placement web-app instantly.
                </p>
              </div>

              {/* QR Code Container */}
              <div className="bg-brand-cream border border-gray-100 rounded-2xl p-6 inline-block shadow-inner relative">
                {/* Simulated QR Code using SVG lines for high-quality responsive vector look */}
                <svg className="w-48 h-48 mx-auto text-brand-dark" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 5h30v30H5V5zm4 4h22v22H9V9zm6 6h10v10H15V15zM65 5h30v30H65V5zm4 4h22v22H69V9zm6 6h10v10H75V15zM5 65h30v30H5V65zm4 4h22v22H9V69zm6 6h10v10H15V75z" fill="currentColor"/>
                  <path d="M45 5h10v10H45V5zm0 20h10v10H45V25zm10-10h10v10H55V15zm0 20h10v10H55V35zM5 45h10v10H5V45zm20 0h10v10H25V45zm20 0h10v10H45V45zm10 0h10v10H55V45zm20 0h10v10H75V45zm10 0h10v10H85V45zM45 55h10v10H45V55zm20 0h10v10H65V55zm10-10h10v10H75V35z" fill="currentColor"/>
                  <path d="M45 65h10v10H45V65zm10 10h10v10H55V75zm10-10h10v10H65V65zm10 10h10v10H75V75zm10-10h10v10H85V65zm0 20h10v10H85V85zm-20 0h10v10H65V85zm-25 0h10v10H40V85z" fill="currentColor"/>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow border border-gray-100 flex items-center justify-center">
                  <img src="/images/soliasartlogo.png" alt="Logo" className="w-8 h-8 object-contain" />
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-gray-50 rounded-xl p-4 flex gap-3 text-left border border-gray-100">
                <ShieldAlert size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-bold text-gray-800">Browser Requirement</span>
                  <p className="text-[11px] text-gray-500">Requires Safari (iOS 13+) or Google Chrome (Android) with WebXR support for direct room rendering.</p>
                </div>
              </div>

              <button 
                onClick={() => setShowQrModal(false)}
                className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
              >
                Close Calibration Screen
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
