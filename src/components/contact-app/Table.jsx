import { useState } from "react";

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  let filteredContact = [];
  const searchCB = (contact) =>
    contact.name.toLowerCase().includes(search) ||
    contact.email.toLowerCase().includes(search);

  if (filter === "All") {
    filteredContact = search ? contacts.filter(searchCB) : contacts;
  } else {
    filteredContact = contacts.filter(
      (contact) => contact.group === filter && searchCB(contact)
    );
  }

  return (
    <div>
      <div>
        <br />
        Filter
        <select value={filter} onChange={handleChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <input
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredContact.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
