/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Y() {
  const Y = sessionStorage.getItem('Y');
  console.log('Y:', Y);
  return (
    <div class={tw`flex gap-2 w-full`}>
      Y State: {Y}
    </div>
  );
}

