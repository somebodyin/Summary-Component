import React from "react";
import { ReactComponent as IconVisual } from "./assets/images/icon-visual.svg";
import { ReactComponent as IconReaction } from "./assets/images/icon-reaction.svg";
import { ReactComponent as IconMemory } from "./assets/images/icon-memory.svg";
import { ReactComponent as IconVerbal } from "./assets/images/icon-verbal.svg";

export const features = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": React.createElement(IconReaction),
    "color": "#ff5757"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": React.createElement(IconMemory),
    "color": "#ffb01f"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": React.createElement(IconVerbal),
    "color": "#00bd91"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": React.createElement(IconVisual),
    "color": "#1125d4"
  }
];
