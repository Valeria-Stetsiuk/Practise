import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addUser } from "redux/users/users-actions";

export const AddContactPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === "name" ? setName(value) : setAge(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name,
      age,
      id: nanoid(),
    };

      dispatch(addUser(newUser));
      
      setName('');
      setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Age
        <input type="text" name="age" value={age} onChange={handleChange} />
      </label>
      <button>Add user</button>
    </form>
  );
};
