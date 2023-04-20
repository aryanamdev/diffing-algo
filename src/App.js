import React, { useState } from "react";
import DiffViewer from "react-diff-viewer";
import "./App.css";

function App() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");

  const diffViewerStyles = {
    variables: {
      light: {
        diffViewerBackground: "#f8f8f8",
        addedBackground: "#e6ffed",
        addedGutterBackground: "#cdffd8",
        removedBackground: "#ffeef0",
        removedGutterBackground: "#ffdce0",
      },
    },
  };

  return (
    <div className="App">
      <h1>Diffing Algorithm in React</h1>
      <div className="input-container">
        <textarea
          placeholder="Enter old text here"
          value={oldText}
          onChange={(e) => setOldText(e.target.value)}
        />
        <textarea
          placeholder="Enter new text here"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      </div>
      <DiffViewer
        oldValue={oldText}
        useDarkTheme={true}
        newValue={newText}
        styles={diffViewerStyles}
      />
    </div>
  );
}

export default App;
