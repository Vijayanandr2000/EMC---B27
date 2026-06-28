import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([
    {
      name: 'vijay',
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name
    }


  setUsers([...users, newUser])


  };

  const handleDelete = (idx) => {
    let filteredUser = users.filter((user, i) => {
        if(i !== idx)
            return user
    })
    setUsers(filteredUser);
  }

  return (
    <>
      <h1>Form</h1>
      <div className="form">
        <form>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              let userInput = e.target.value;
              setName(userInput);
            }}
          />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="table">
        <table border="1">
          <thead>
            <tr>
              <th>SI.No</th>
              <th>Name</th>
              <th>Actio</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(idx)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
