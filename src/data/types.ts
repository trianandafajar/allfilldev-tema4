export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MenuItem = {
  title: string;
  /** Harga dalam rupiah (angka), diformat lewat `formatRupiah`. */
  price: number;
  description: string;
  note: string;
  image: ImageAsset;
};

export type SocialLink = {
  name: string;
  href: string;
};
