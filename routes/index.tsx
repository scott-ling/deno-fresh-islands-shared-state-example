/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Y from "../islands/Y.tsx";
import X from "../islands/X.tsx";

export default function Home() {

  // lazy set of state
  sessionStorage.setItem('X', 'X first');
  sessionStorage.setItem('Y', 'Y first');

  // X & Y get state from shared session

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <X />
      <Y />
    </div>
  );
}


