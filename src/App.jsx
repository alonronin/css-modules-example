import React from "react";
import { header, big } from "./style";
import Component from "./Component";

export default function App() {
  return (
    <div>
      <h1 className={header}><span>Hello</span></h1>

      <p className={big}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto blanditiis consectetur
        consequuntur
        delectus, fuga hic iusto laudantium magni odio odit possimus provident, quis quod repudiandae sunt tempore,
        voluptas voluptatibus.</p>

      <Component />
    </div>
  )
}
