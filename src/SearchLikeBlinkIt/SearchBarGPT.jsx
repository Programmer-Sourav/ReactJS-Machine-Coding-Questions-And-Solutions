import React, { useEffect, useState } from "react";

export default function SearchBarGPT() {
  const setOfDummySearches = [
    { id: 1, prompt: "Search Grocery items" },
    { id: 2, prompt: "Search Fruits" },
    { id: 3, prompt: "Search Daily use product" },
    { id: 4, prompt: "Buy Tooth Brush, Tooth paste" },
  ];

  const [allValues] = useState(setOfDummySearches);
  const [searchValue, setSearchValue] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  useEffect(() => {
    let promptIndex = 0;

    const startTyping = (prompt) => {
      let charIndex = 0;
      setDisplayedText("");

      const typingInterval = setInterval(() => {
        setDisplayedText((prev) => prev + prompt[charIndex]);
        charIndex++;
        if (charIndex === prompt.length) {
          clearInterval(typingInterval);
        }
      }, 80); // Speed of typing
    };

    const loopInterval = setInterval(() => {
      const nextPrompt = allValues[promptIndex].prompt;
      startTyping(nextPrompt);
      promptIndex = (promptIndex + 1) % allValues.length;
      setCurrentPromptIndex(promptIndex);
    }, 3000); // Change prompt every 3 seconds

    // Initial prompt
    startTyping(allValues[0].prompt);

    return () => clearInterval(loopInterval);
  }, [allValues]);

  return (
    <div className="p-4">
      <h2 className="text-2xl text-black mb-2">Search</h2>
      <input
        type="search"
        className="border border-red-500 w-[512px] h-[44px] bg-red-100 px-2 text-black text-lg"
        value={searchValue || displayedText}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Start typing..."
      />
    </div>
  );
}
