'use client';
import {memo, useEffect, useMemo, useState} from 'react';
import Particles, {ParticlesProvider} from '@tsparticles/react';
import {loadSlim} from '@tsparticles/slim';
import type {Engine, ISourceOptions} from '@tsparticles/engine';

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
        number: {
          value: particleCount,
          density: {enable: false},
        },
        shape: {type: 'circle'},
        color: {value: isDark ? '#ffffff' : '#000000'},
        opacity: {
          value: {min: 0.7, max: 1},
        },
        size: {
          value: {min: 1.2, max: 2.8},
        },
        move: {
          enable: false,
          speed: 0,
        },
        links: {
          enable: true,
          color: isDark ? '#ffffff' : '#000000',
          opacity: 0.55,
          distance: 135,
          width: 1.2,
        },
      },
      interactivity: {
        events: {
          onHover: {enable: false, mode: 'grab'},
          onClick: {enable: false, mode: 'push'},
          resize: {enable: true},
        },
      },
    }),
    [isDark, particleCount],
  );

  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id={id}
        className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ''}`}
        options={options}
      />
    </ParticlesProvider>
  );
};

export default memo(HeroParticles);
