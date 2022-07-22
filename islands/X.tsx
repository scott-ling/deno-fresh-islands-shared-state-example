/** @jsx h */
import { h } from "preact";

export default function X() {
  const X = sessionStorage.getItem('X');
  console.log('X:', X);
  return (
    <div>
    </div>
  );
}

