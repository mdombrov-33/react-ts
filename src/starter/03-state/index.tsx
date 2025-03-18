import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks = [
  {
    id: 1,
    url: "someUrl",
    text: "Home",
  },
  {
    id: 2,
    url: "someUrl",
    text: "About",
  },
  {
    id: 3,
    url: "someUrl",
    text: "Services",
  },
  {
    id: 4,
    url: "someUrl",
    text: "Contact",
  },
];

function Component() {
  const [text, setText] = useState("Hello world");
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          // setText("Hello React");
          setLinks([...links, { id: 5, url: "someUrl", text: "New Link" }]);
        }}
      >
        click me
      </button>
      <h2>State</h2>
    </div>
  );
}
export default Component;
