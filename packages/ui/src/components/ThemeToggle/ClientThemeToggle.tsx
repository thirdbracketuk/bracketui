"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const ClientThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ThemeToggle />;
};

export default ClientThemeToggle;
