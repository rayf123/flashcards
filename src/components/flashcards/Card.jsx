import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";

import "../../input.css";

export default function Card({ front, back }) {
  const [direction, setDirection] = useState(true); //true = front, false = back

  return (
    <ReactCardFlip isFlipped = {!direction} flipDirection="vertical">
        <div class="block text-center text-pretty w-96 max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick = {() => setDirection(false)}>
            <p class="text-2xl break-words tracking-tight text-gray-900 dark:text-white font">
              {front}
            </p> 
        </div>

        <div class="block text-center text-pretty w-96 max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick = {() => setDirection(true)}>
            <p class="text-2xl break-words tracking-tight text-gray-900 dark:text-white font">
              {back}
            </p> 
        </div>
    </ReactCardFlip>
  );
}
