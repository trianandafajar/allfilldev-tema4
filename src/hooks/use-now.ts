import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  const timer = setInterval(onChange, 1000);
  return () => clearInterval(timer);
}

const getSnapshot = () => Math.floor(Date.now() / 1000) * 1000;
const getServerSnapshot = () => null;

/** Waktu sekarang (ms) yang diperbarui tiap detik. `null` saat render server dan hydrasi, jadi tidak ada mismatch. */
export function useNow(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
