'use client';

import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { useState, useEffect, ReactNode } from 'react';

type CardRotateProps = {
  children: ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
};

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [40, -40]);
  const rotateY = useTransform(x, [-150, 150], [-40, 40]);

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    }
    // Reset position after drag for a smooth return if not swiped away
    x.set(0);
    y.set(0);
  }

  if (disableDrag) {
    return <div className="absolute inset-0 cursor-pointer">{children}</div>;
  }

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        x,
        y,
        rotateX,
        rotateY,
      }}
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


type StackProps = {
    randomRotation?: boolean;
    sensitivity?: number;
    cards: ReactNode[];
    animationConfig?: { stiffness: number; damping: number; };
    sendToBackOnClick?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    mobileClickOnly?: boolean;
    mobileBreakpoint?: number;
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
  mobileBreakpoint = 768
}: StackProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [randomRotations, setRandomRotations] = useState<number[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    if (randomRotation) {
      setRandomRotations(Array.from({ length: cards.length }, () => Math.random() * 6 - 3));
    } else {
        setRandomRotations(Array.from({ length: cards.length }, () => 0));
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint, randomRotation, cards.length]);

  const [stack, setStack] = useState(() => {
      return cards.map((content, index) => ({ id: index, content }));
  });

  useEffect(() => {
      setStack(cards.map((content, index) => ({ id: index, content })));
  }, [cards]);

  const sendToBack = (id: number) => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      // Only allow the top card to be sent to the back
      if (index !== newStack.length - 1) return prev;
      
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  if (!stack.length) {
    return null;
  }

  const shouldDisableDrag = mobileClickOnly && isMobile;

  return (
    <div
      className="relative w-full h-full"
      style={{
        perspective: 1000,
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const isTopCard = index === stack.length - 1;
        const shouldEnableClick = (sendToBackOnClick || shouldDisableDrag) && isTopCard;
        const randomRotate = randomRotations[index] || 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={!isTopCard || shouldDisableDrag}
          >
            <motion.div
              className="rounded-2xl overflow-hidden w-full h-full absolute cursor-grab"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - 1 - index) * 2 + randomRotate,
                scale: 1 - (stack.length - 1 - index) * 0.04,
                transformOrigin: 'bottom center',
                zIndex: index,
                y: (stack.length - 1 - index) * -10,
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
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
