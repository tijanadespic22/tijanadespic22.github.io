'use client';
import {memo, useEffect, useMemo, useState} from 'react';
import Particles, {ParticlesProvider} from '@tsparticles/react';
import {loadSlim} from '@tsparticles/slim';
import type {Engine, ISourceOptions} from '@tsparticles/engine';
import {cn} from '@utils/CN';

const initParticles = async (engine: Engine) => {
  await loadSlim(engine);
};

const HeroParticles = ({
  id,
  className,
  particleCount = 150,
}: {
  id: string;
  className?: string;
  particleCount?: number;
}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const updateTheme = () => {
      const darkByClass = html.classList.contains('dark');
      const darkByStorage = localStorage.getItem('theme') === 'dark';
      setIsDark(darkByClass || darkByStorage);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(html, {attributes: true, attributeFilter: ['class']});

    return () => observer.disconnect();
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: {enable: false},
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        color: {value: isDark ? '#c7d2fe' : '#000000'},
        move: {
          enable: true,
          speed: {min: 0.3, max: 1.0},
          random: true,
        },
        number: {value: particleCount, density: {enable: true, area: 800}},
        opacity: {
          value: {min: 0.15, max: 0.8},
          animation: {enable: true, speed: 0.5, sync: false},
        },
        size: {
          value: {min: 0.8, max: 3},
          animation: {enable: true, speed: 1.2, sync: false},
        },
        links: {
          enable: true,
          color: isDark ? '#c7d2fe' : '#000000',
          opacity: 0.2,
          distance: 180,
          width: 0.8,
        },
        shape: {type: 'circle'},
        twinkle: {
          particles: {enable: true, frequency: 0.08, opacity: 1},
        },
      },
    }),
    [isDark, particleCount],
  );

  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id={id}
        className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
        options={options}
      />
    </ParticlesProvider>
  );
};

export default memo(HeroParticles);
