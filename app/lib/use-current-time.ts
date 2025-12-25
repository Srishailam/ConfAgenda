'use client';

import { useState, useEffect } from 'react';

export function useCurrentTime(intervalMs: number = 60000) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    // Update immediately
    setCurrentTime(new Date());
    
    // Then update on interval
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return currentTime;
}

// Hook to check if we're on the conference day (for demo purposes)
export function useIsConferenceTime() {
  const currentTime = useCurrentTime();
  
  // Conference dates: Nov 19-22, 2025
  const conferenceStart = new Date('2025-11-19T00:00:00');
  const conferenceEnd = new Date('2025-11-22T23:59:59');
  
  const isConferenceTime = currentTime >= conferenceStart && currentTime <= conferenceEnd;
  
  return {
    currentTime,
    isConferenceTime,
    // For demo, you can use this to simulate conference time
    demoTime: new Date('2025-11-20T10:30:00'),
  };
}

