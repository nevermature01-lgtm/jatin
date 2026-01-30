'use client';

import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { useState, useEffect } from 'react';

function CardRotate({
  children,
  onSendToBack,
  sensitivity,
  disableDrag = false,
}: {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleDragEnd(_: any, info: PanInfo) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      // Snap back
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <div className="absolute inset-0 cursor-pointer" onClick={onSendToBack}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab"
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

type CardData = {
  id: number;
  content: React.ReactNode;
  rotation?: number;
};

export default function Stack({
  randomRotation = false,
  sensitivity = 150,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768,
}: {
  randomRotation?: boolean;
  sensitivity?: number;
  cards?: React.ReactNode[];
  animationConfig?: { stiffness: number; damping: number };
  sendToBackOnClick?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  mobileClickOnly?: boolean;
  mobileBreakpoint?: number;
}) {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const [stack, setStack] = useState<CardData[]>([]);

  useEffect(() => {
    if (cards.length > 0 && isClient) {
      setStack(
        cards.map((content, index) => ({
          id: index + 1,
          content,
          rotation: randomRotation ? Math.random() * 10 - 5 : 0,
        }))
      );
    }
  }, [cards, randomRotation, isClient]);

  const sendToBack = (id: number) => {
    setStack((prev) => {
      const newStack = [...prev];
      const index = newStack.findIndex((card) => card.id === id);
      if (index === -1) return prev;
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        if (stack.length > 0) {
          const topCardId = stack[stack.length - 1].id;
          sendToBack(topCardId);
        }
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  if (!isClient) {
    // Render nothing on the server to avoid hydration mismatch
    return null;
  }
  
  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  return (
    <div
      className="relative w-full h-full"
      style={{
        perspective: 600,
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const isTopCard = index === stack.length - 1;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={!isTopCard || shouldDisableDrag}
          >
            <motion.div
              className="rounded-2xl overflow-hidden w-full h-full absolute cursor-grab"
              onClick={() => shouldEnableClick && isTopCard && sendToBack(card.id)}
              animate={{
                rotateZ: isTopCard ? card.rotation : (stack.length - index - 1) * 4 + (card.rotation ?? 0),
                scale: isTopCard ? 1 : 1 + index * 0.04 - stack.length * 0.04,
                y: isTopCard ? 0 : (stack.length - index - 1) * -10,
                transformOrigin: 'bottom center',
                zIndex: index,
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
