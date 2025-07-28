"use client";
import { useState } from "react";

const useClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = (text: string): void => {
    if (!text) return;

    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, copy };
};

export default useClipboard;
