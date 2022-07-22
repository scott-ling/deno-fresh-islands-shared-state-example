/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function X() {
  const X = sessionStorage.getItem('X');
  return (
    <div class={tw`flex gap-2 w-full`}>
      X State: {X}
    </div>
  );
}

