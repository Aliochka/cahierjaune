import rss from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Cahier Jaune | Blog',
    description: 'Le blog de romain',
    site: 'https://cahierjaune.com/',
    items: import.meta.glob('./**/blog/*.md'),
    customData: `<language>fr</language>`,
  })
};