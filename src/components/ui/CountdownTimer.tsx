"use client";
import React from 'react';
import { useCountdown } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="cd-row">
      <div className="cd-box">
        <div className="cd-num" id="cd-d">{days}</div>
        <div className="cd-lbl">يوم</div>
      </div>
      <div className="cd-sep">:</div>
      <div className="cd-box">
        <div className="cd-num" id="cd-h">{hours}</div>
        <div className="cd-lbl">ساعة</div>
      </div>
      <div className="cd-sep">:</div>
      <div className="cd-box">
        <div className="cd-num" id="cd-m">{minutes}</div>
        <div className="cd-lbl">دقيقة</div>
      </div>
      <div className="cd-sep">:</div>
      <div className="cd-box">
        <div className="cd-num" id="cd-s">{seconds}</div>
        <div className="cd-lbl">ثانية</div>
      </div>
    </div>
  );
}
