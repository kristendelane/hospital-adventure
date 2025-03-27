import { useState, useEffect } from "react";
import { story as rawStory } from "./story";

type Scene = {
  id: string;
  text: string;
  choices: {
    text: string;
    next: string;
  }[];
};

type Story = {
  [key: string]: Scene;
};

const story: Story = rawStory;

function App() {
  const [sceneId, setSceneId] = useState<string>("start");
  const [currentScene, setCurrentScene] = useState<Scene>(story["start"]);

  useEffect(() => {
    setCurrentScene(story[sceneId]);
  }, [sceneId]);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
        {currentScene.text}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {currentScene.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => setSceneId(choice.next)}  // Corrected here
            style={{
              padding: "0.75rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
            }}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

// **This is where the export should go:**
export default App;  // <-- This line goes at the bottom
