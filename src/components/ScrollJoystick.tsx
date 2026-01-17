"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Joystick, JoystickMoveEvent } from "@/components/ui/Joystick";

export const ScrollJoystick = () => {
  // Initial position will be set on mount
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [speedMultiplier] = useState(15);
  const [isOpen, setIsOpen] = useState(false);

  const animationFrameId = useRef<number | null>(null);
  const scrollDelta = useRef(0);
  const isMoving = useRef(false);

  // Dragging state
  const isDraggingContainer = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  // Initialize position on client side only (bottom-right)
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only show on touch devices (coarse pointer)
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

      if (isTouchDevice) {
        // Use requestAnimationFrame to avoid synchronous setState warning
        requestAnimationFrame(() => {
          setPosition({
            x: window.innerWidth - 120, // Tighter to corner
            y: window.innerHeight - 80, // Lower position (approx 36px from bottom)
          });
        });
      }
    }
  }, []);

  // Scroll loop
  useEffect(() => {
    const loop = () => {
      if (isMoving.current && scrollDelta.current !== 0) {
        // scrollDelta is -1 to 1
        const scrollAmount = scrollDelta.current * speedMultiplier;
        window.scrollBy(0, scrollAmount);
      }
      animationFrameId.current = requestAnimationFrame(loop);
    };

    animationFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [speedMultiplier]);

  const handleJoystickMove = useCallback((event: JoystickMoveEvent) => {
    isMoving.current = true;

    // Apply deadzone for easier neutral finding
    // 0.2 (20%) threshold seems reasonable for a "relaxed" center
    if (Math.abs(event.y) < 0.2) {
      scrollDelta.current = 0;
    } else {
      scrollDelta.current = event.y;
    }
  }, []);

  const handleJoystickStop = useCallback(() => {
    isMoving.current = false;
    scrollDelta.current = 0;
  }, []);

  // --- Drag Logic ---
  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleDragStart = (clientX: number, clientY: number) => {
    if (!position) return;
    isDraggingContainer.current = true;
    hasMoved.current = false;
    dragStartPos.current = { x: clientX, y: clientY };
    dragOffset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const handleDragMove = useCallback((clientX: number, clientY: number) => {
    if (!isDraggingContainer.current) return;

    // Calculate distance moved from start of drag
    const moveDist = Math.sqrt(
      Math.pow(clientX - dragStartPos.current.x, 2) +
        Math.pow(clientY - dragStartPos.current.y, 2),
    );

    // Only consider it a "move" if dragged more than 5 pixels
    if (moveDist > 5) {
      hasMoved.current = true;
    }

    // Sticky drag: only move if threshold passed
    if (hasMoved.current) {
      const newX = clientX - dragOffset.current.x;
      const newY = clientY - dragOffset.current.y;

      const maxX = window.innerWidth - 50;
      const maxY = window.innerHeight - 50;

      setPosition({
        x: Math.min(Math.max(0, newX), maxX),
        y: Math.min(Math.max(0, newY), maxY),
      });
    }
  }, []); // position dependency removed as it uses refs

  const handleDragEnd = useCallback(() => {
    isDraggingContainer.current = false;
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleDragMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingContainer.current) e.preventDefault();
      handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onMouseUp = () => handleDragEnd();
    const onTouchEnd = () => handleDragEnd();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [handleDragMove, handleDragEnd]);

  if (!position) return null;

  return (
    <div
      id="scroll-joystick"
      className="fixed z-[1000] flex flex-col items-center gap-2"
      style={{
        display: "flex", // Force flex layout
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        left: position.x,
        top: position.y,
        zIndex: 1000,
        touchAction: "none",
      }}
    >
      {/* Joystick Component - Collapsible */}
      <div
        className="transition-all duration-300 origin-bottom"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "scale(1)" : "scale(0.5)",
          pointerEvents: isOpen ? "auto" : "none",
          height: isOpen ? "auto" : 0,
          overflow: "hidden",
          marginBottom: isOpen ? "0.5rem" : 0,
        }}
      >
        <Joystick
          size={100}
          baseColor="rgba(255, 255, 255, 0.4)"
          stickColor="rgba(15, 23, 42, 0.6)"
          lockX={true}
          move={handleJoystickMove}
          stop={handleJoystickStop}
        />
      </div>

      {/* Accessibility / Drag Handle Button */}
      <button
        onClick={() => {
          if (!hasMoved.current) {
            const offset = 108; // Joystick (100) + margins/gap (8) - Gap (0) = 108 diff

            if (isOpen) {
              // Closing: Content shrinks UP. Move container DOWN to keep button stationary.
              const newY = Math.min(
                window.innerHeight - 60,
                position.y + offset,
              );
              setPosition({ ...position, y: newY });
            } else {
              // Opening: Content grows DOWN. Move container UP to keep button stationary.
              const newY = Math.max(10, position.y - offset);
              setPosition({ ...position, y: newY });
            }
            setIsOpen((prev) => !prev);
          }
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          handleDragStart(e.clientX, e.clientY);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
        }}
        className="flex justify-center items-center hover:bg-white/60 text-slate-900/80 transition-all active:scale-95 cursor-move"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)",
          backdropFilter: "blur(4px)",
        }}
        title="Toggle / Drag"
        aria-label="Toggle Scroll Joystick"
      >
        {/* Scroll Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.8 }}
        >
          <path d="M8 7l4-4 4 4" /> {/* Top arrow */}
          <path d="M8 12h8" /> {/* Middle bar */}
          <path d="M8 17l4 4 4-4" /> {/* Bottom arrow */}
        </svg>
      </button>
    </div>
  );
};
