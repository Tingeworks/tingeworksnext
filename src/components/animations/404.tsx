"use client";

import { useEffect, useState } from "react";

export default function $404() {
  const [raged, setRaged] = useState(false);
  const [emoji, setEmoji] = useState("ʕっ•ᴥ•ʔっ");

  const emojiState = ["ʕっ•ᴥ•ʔっ", "ʕノ•ᴥ•ʔノ ︵ ┻━┻"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRaged(!raged);
    }, 500);

    return () => clearInterval(interval);
  });

  return <>{raged ? emojiState[1] : emojiState[0]}</>;
}
