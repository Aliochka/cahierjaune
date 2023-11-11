import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Cahier Jaune | Blog',
  description: 'Le blog de romain',
  site: 'https://lighthearted-croissant-d5a2a1.netlify.app/',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>fr</language>`,
});