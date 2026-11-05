import type { ImageAsset } from "./types";

/** Ukuran file foto hover menu (persegi). Tampil ±150px sebagai lingkaran, disimpan 2x. */
const MENU_IMAGE_SIZE = 320;

/**
 * Pasang foto hover ke tiap hidangan: item ke-n memakai `/images/menu/<kategori>-<n>.jpg`.
 * Urutan array menentukan foto, jadi mengubah urutan hidangan berarti menukar nama file-nya juga.
 */
export function withMenuImages<T extends { title: string }>(category: string, items: T[]) {
  return items.map((item, i) => ({
    ...item,
    image: {
      src: `/images/menu/${category}-${i + 1}.jpg`,
      alt: item.title,
      width: MENU_IMAGE_SIZE,
      height: MENU_IMAGE_SIZE,
    } satisfies ImageAsset,
  }));
}
