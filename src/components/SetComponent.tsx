import { fireworkData } from "../firework-data";
import { Firework, Set } from "../types/types";
import RemoteBtnComponent from "./RemoteBtnComponent";
import _ from "lodash";
import React, { useState, useEffect, useMemo } from "react";

interface SetProps {
  setName: Set;
}

// Map between the set names and the data object keys
const setNameMap: Record<Set, keyof typeof fireworkData> = {
  "Set 1": "set1",
  "Set 2": "set2",
  "Set 3": "set3",
  Finale: "finale",
};

const SetComponent: React.FC<SetProps> = (props) => {
  // Ensure TypeScript knows we're using a valid key from fireworkData
  const fireworksSet = fireworkData[setNameMap[props.setName]];

  // Sort by delay if fireworksSet exists
  const fireworksSortedByDelay: Firework[] = useMemo(() => {
    return fireworksSet ? _.sortBy(fireworksSet, "delay") : [];
  }, [fireworksSet]);

  // State to track the current firework index
  const [currentFireworkIndex, setCurrentFireworkIndex] = useState(0);

  // Effect to handle timing and switching between fireworks
  useEffect(() => {
    if (fireworksSortedByDelay.length === 0) return; // If no fireworks, do nothing

    // Get the current firework based on the current index
    const currentFirework = fireworksSortedByDelay[currentFireworkIndex];

    // Calculate when the current firework should end (delay + duration)
    const fireworkEnd = currentFirework.delay + currentFirework.duration;

    // Set a timeout to move to the next firework after the current one ends
    const timer = setTimeout(() => {
      if (currentFireworkIndex < fireworksSortedByDelay.length - 1) {
        setCurrentFireworkIndex((prevIndex) => prevIndex + 1);
      }
    }, (fireworkEnd - currentFirework.delay) * 1000); // Time is in seconds, so multiply by 1000

    // Clear timeout when the component unmounts or when the firework changes
    return () => clearTimeout(timer);
  }, [currentFireworkIndex, fireworksSortedByDelay]);

  return (
    <div className="d-flex">
      <div>
        {/* Display the upcoming firework */}
        <RemoteBtnComponent
          data={fireworksSortedByDelay[currentFireworkIndex]}
        />
      </div>
      <div>
        {/* Display all fireworks */}
        {fireworksSortedByDelay.map((firework, index) => (
          <RemoteBtnComponent key={firework.cueNumber} data={firework} />
        ))}
      </div>
    </div>
  );
};

export default SetComponent;
