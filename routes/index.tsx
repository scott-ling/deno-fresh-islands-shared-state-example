/** @jsx h */
import { h } from "preact";
import Y from "../islands/Y.tsx";
import X from "../islands/X.tsx";

export default function Home() {

  // lazy set of state
  sessionStorage.setItem('X', 'X Value in sessionState');
  sessionStorage.setItem('Y', 'Y  Value in sessionState');

  return (
    <div>
      {/* islands render empty divs, purpose of demo is to show islands sharing state, which can be seen server side. */}
      <X />
      <Y />
    </div>
  );
}


