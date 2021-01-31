const BASE_URL = "http://localhost:4040";

// const contact = {
//   name: "AAAAAAA!!!",
//   number: 1010101010,
// };

export default function fetchAddNewContact(newContact) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newContact),
  };

  return fetch(`${BASE_URL}/contacts`, options)
    .then((res) => res.json())
    .then((info) => info);
}
