import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const CharSpan: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 select-none">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalLength = text.length;

  let runningCharIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] ${className}`}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const wordElements = (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIdx) => {
              const currentIndex = runningCharIndex++;
              const start = currentIndex / totalLength;
              const end = Math.min(1, (currentIndex + 1) / totalLength);
              return (
                <CharSpan
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // Account for the space between words in indexing
        if (wordIndex < words.length - 1) {
          runningCharIndex++;
        }

        return (
          <React.Fragment key={wordIndex}>
            {wordElements}
            {wordIndex < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default AnimatedText;
