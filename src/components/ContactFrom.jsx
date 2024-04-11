import { useState } from "react";
import Button from "./Button";

function ContactFrom() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="contact-form">
      <div>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Surname
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>

        <label>
          Email Address
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Contact Number
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>

        <label>
          Message
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>

      <Button>Submit</Button>
    </form>
  );
}

export default ContactFrom;
