import { useState } from "react";

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  return (
    <section>
      <h2>Events</h2>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>{text}</p>
      <p>{email}</p>
    </section>
  );
}
export default Component;
