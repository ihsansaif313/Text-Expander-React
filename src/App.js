import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="cosmic-container">
      <div className="stellar-bg">
        {[...Array(150)].map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>
      
      <div className="app-content">
        <h1 className="galactic-title">
          <span>Cosmic</span>
          <span>Explorations</span>
        </h1>

        <TextExpander>
          Space travel is the ultimate adventure! Imagine soaring past the stars
          and exploring new worlds. It's the stuff of dreams and science fiction,
          but believe it or not, space travel is a real thing. Humans and robots
          are constantly venturing out into the cosmos to uncover its secrets and
          push the boundaries of what's possible.
        </TextExpander>

        <TextExpander
          collapsedNumWords={20}
          expandButtonText="Reveal cosmic secrets"
          collapseButtonText="Collapse knowledge"
          buttonColor="#6d28d9"
          className="nebula-box"
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while it's not always easy (or cheap), the
          results are out of this world. Think about the first time humans stepped
          foot on the moon or when rovers were sent to roam around on Mars.
        </TextExpander>

        <TextExpander 
          expanded={true} 
          className="supernova-box"
          buttonColor="#e879f9"
        >
          Space missions have given us incredible insights into our universe and
          have inspired future generations to keep reaching for the stars. Space
          travel is a pretty cool thing to think about. Who knows what we'll
          discover next!
        </TextExpander>
      </div>
    </div>
  );
}

// TextExpander component remains the same as previous version

function TextExpander({
  children,
  collapsedNumWords = 5,
  collapseButtonText = "Show less",
  expandButtonText = "Show more",
  buttonColor = "#16a34a",
  expanded = false,
  className = "",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={`text-expander ${className}`.trim()}>
      <div className="text-content">
        {displayText}
      </div>
      
      <button
        type="button"
        className="expand-button"
        onClick={toggleExpansion}
        style={{
          '--btn-color': buttonColor,
          background: `linear-gradient(to right, ${buttonColor}, ${adjustColor(buttonColor, 20)})`,
        }}
        aria-label={isExpanded ? collapseButtonText : expandButtonText}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
        <span className="button-icon">
          <svg
            className={`arrow ${isExpanded ? "expanded" : ""}`}
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path
              fill="currentColor"
              d="M12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4z"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

// Helper function to adjust button color
function adjustColor(color, amount) {
  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, color => {
        const adjusted = Math.min(255, Math.max(0, parseInt(color, 16) + amount));
        return ('0' + adjusted.toString(16)).slice(-2);
      })
  );
}