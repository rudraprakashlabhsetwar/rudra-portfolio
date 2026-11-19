import React from 'react';

export const BackgroundMesh: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle radial ambient gradients */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(99, 102, 241, 0.1) 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute top-[35%] -right-40 w-[650px] h-[650px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(124, 58, 237, 0.15) 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full blur-[170px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(59, 130, 246, 0.1) 70%, transparent 85%)'
        }}
      />

      {/* Modern subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* Top vignette fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/60 via-transparent to-[#08080a]" />
    </div>
  );
};
