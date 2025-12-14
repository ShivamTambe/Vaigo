import { useEffect, useRef } from "react";

export default function NoStrictMode({ children }: { children: React.ReactNode }) {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
  }, []);

  return <>{children}</>;
}
