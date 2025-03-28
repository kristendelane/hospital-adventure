import { useState, useEffect } from "react";
import { story, Scene } from "./story";

function App() {
  const [sceneId, setSceneId] = useState<string>("pain_management_intro");
  const [currentScene, setCurrentScene] = useState<Scene>(story["pain_management_intro"]);

  useEffect(() => {
    // Explicitly tell TypeScript that sceneId is a valid key for 'story'
    setCurrentScene(story[sceneId as keyof typeof story]);
  }, [sceneId]);

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>{currentScene.text}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {currentScene.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => setSceneId(choice.next)}
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

export default App;
