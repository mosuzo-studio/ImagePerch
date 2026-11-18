interface Identity {
  name: string;
  slug: string;
  domain: string;
  repo: string;
  released: boolean;
  version: string;
  download: string | null;
}
export const identity: Identity = {
  name: 'ImagePerch',
  slug: 'imageperch',
  domain: 'https://imageperch.mosuzo.com',
  repo: 'https://github.com/mosuzo-studio/ImagePerch',
  released: false,
  version: '7.20.9',
  download: null,
};
