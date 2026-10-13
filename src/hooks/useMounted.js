import { useEffect, useState } from "react";

/** False during prerender and the hydration pass, true right after. */
export const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};
