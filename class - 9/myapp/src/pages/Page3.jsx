import React, { useContext } from 'react';
import { GlobalContext } from '../context/Global';

const Page3 = () => {
  const { name, setName } = useContext(GlobalContext);

  return (
    <div>
      Page3 - {name}
      <button onClick={() => setName('New Name')}>Change Name</button>
    </div>
  );
};

export default Page3;
