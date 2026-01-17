"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

export interface JoystickMoveEvent {
  x: number; // relative x position (-1 to 1)
  y: number; // relative y position (-1 to 1)
  direction: "FORWARD" | "RIGHT" | "BACKWARD" | "LEFT" | "CENTER";
  distance: number; // distance from center (0 to 1)
}

interface JoystickProps {
  size?: number;
  baseColor?: string;
  stickColor?: string;
  throttle?: number;
  disabled?: boolean;
  stickSize?: number;
  lockX?: boolean; // If true, only Y axis movement is allowed
  move?: (event: JoystickMoveEvent) => void;
  stop?: (event: JoystickMoveEvent) => void;
  start?: () => void;
}

export const Joystick: React.FC<JoystickProps> = ({
  size = 100,
  baseColor = "rgba(0, 0, 0, 0.5)",
  stickColor = "rgba(255, 255, 255, 0.8)",
  stickSize = size * 0.6,
  disabled = false,
  lockX = false,
  move,
  stop,
  start,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const radius = size / 2;

  const updatePosition = useCallback(
    (clientX: number, clientY: number) => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const centerX = rect.left + radius;
      const centerY = rect.top + radius;

      let dx = clientX - centerX;
      const dy = clientY - centerY;

      if (lockX) {
        dx = 0; // Lock X axis
      }

      const distance = Math.sqrt(dx * dx + dy * dy);

      let x = dx;
      let y = dy;

      if (distance > radius) {
        if (lockX) {
          // Simple clamping for 1D
          y = Math.sign(dy) * radius;
          x = 0;
        } else {
          const angle = Math.atan2(dy, dx);
          x = Math.cos(angle) * radius;
          y = Math.sin(angle) * radius;
        }
      }

      setPosition({ x, y });

      if (move) {
        // Calculate normalized values
        const normalizedX = x / radius;
        const normalizedY = y / radius;
        const normalizedDistance = Math.min(distance / radius, 1);

        let direction: JoystickMoveEvent["direction"] = "CENTER";
        if (normalizedDistance > 0.1) {
          if (Math.abs(normalizedX) > Math.abs(normalizedY)) {
            direction = normalizedX > 0 ? "RIGHT" : "LEFT";
          } else {
            direction = normalizedY > 0 ? "BACKWARD" : "FORWARD"; // Y is usually inverted in screen coords (down is +)
          }
        }

        move({
          x: normalizedX,
          y: normalizedY,
          direction,
          distance: normalizedDistance,
        });
      }
    },
    [radius, move, lockX],
  );

  const handleStart = useCallback(
    (clientX: number, clientY: number) => {
      if (disabled) return;
      setIsDragging(true);
      if (start) start();
      updatePosition(clientX, clientY);
    },
    [disabled, start, updatePosition],
  );

  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    setPosition({ x: 0, y: 0 });
    if (stop) {
      stop({
        x: 0,
        y: 0,
        direction: "CENTER",
        distance: 0,
      });
    }
  }, [isDragging, stop]);

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging) return;
      // Use RAF to prevent excessive updates if needed, but for smooth scroll frequent updates are good.
      // For now direct call.
      updatePosition(clientX, clientY);
    },
    [isDragging, updatePosition],
  );

  // Global event listeners for drag
  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.cancelable) e.preventDefault(); // Prevent scroll while using joystick
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onMouseUp = () => handleEnd();
    const onTouchEnd = () => handleEnd();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging, handleMove, handleEnd]);

  return (
    <div
      ref={wrapperRef}
      style={{
        width: size,
        height: size,
        borderRadius: "16px", // Standard rounded square
        background: baseColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        touchAction: "none",
        position: "relative",
        flexShrink: 0,
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onTouchStart={(e) =>
        handleStart(e.touches[0].clientX, e.touches[0].clientY)
      }
    >
      {/* Direction & Neutral Indicators */}

      {/* Up Arrow - Fixed to Top */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={
          isDragging && position.y < -10
            ? "rgba(15, 23, 42, 1)"
            : "rgba(15, 23, 42, 0.4)"
        }
        strokeWidth={isDragging && position.y < -10 ? "3" : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: "absolute",
          top: "4px",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          transition: "all 0.2s ease",
          opacity: isDragging && position.y < -10 ? 1 : 0.5,
          filter:
            isDragging && position.y < -10
              ? "drop-shadow(0 0 4px rgba(15, 23, 42, 0.3))"
              : "none",
        }}
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>

      {/* Down Arrow - Fixed to Bottom */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={
          isDragging && position.y > 10
            ? "rgba(15, 23, 42, 1)"
            : "rgba(15, 23, 42, 0.4)"
        }
        strokeWidth={isDragging && position.y > 10 ? "3" : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          position: "absolute",
          bottom: "4px",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          transition: "all 0.2s ease",
          opacity: isDragging && position.y > 10 ? 1 : 0.5,
          filter:
            isDragging && position.y > 10
              ? "drop-shadow(0 0 4px rgba(15, 23, 42, 0.3))"
              : "none",
        }}
      >
        <path d="M6 9l6 6 6-6" />
      </svg>

      <div
        style={{
          width: stickSize,
          height: stickSize * 0.25, // Make it a horizontal bar
          borderRadius: "100px", // Pill shape
          // Highlight when dragging but in neutral zone (< 10px)
          background:
            isDragging && Math.abs(position.y) < 10
              ? "rgba(15, 23, 42, 1)"
              : stickColor,
          position: "absolute",
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          transition: isDragging
            ? "background 0.2s, box-shadow 0.2s"
            : "transform 0.2s ease-out",
          // Glow effect in neutral
          boxShadow:
            isDragging && Math.abs(position.y) < 10
              ? "0 0 10px rgba(15, 23, 42, 0.5), 0 4px 8px rgba(0,0,0,0.2)"
              : isDragging
                ? "0 4px 8px rgba(0,0,0,0.2)"
                : "0 2px 4px rgba(0,0,0,0.1)",
          scale: isDragging ? 1.05 : 1,
          zIndex: 20,
        }}
      />
    </div>
  );
};
