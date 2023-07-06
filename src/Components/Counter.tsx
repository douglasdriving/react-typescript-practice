import React, { useState } from 'react';

const Counter: React.FC = () => { //React.FC is a typescript type that indicates that this is a functional component

  const [count, setCount] = useState<number>(0); //specify the type of the state variable as number
  const [open, setOpen] = useState<boolean>(false); //specify the type of the state variable as boolean
  const [name, setName] = useState<string | null>(null); //specify the type of the state variable as string or null
  const [nameInput, setNameInput] = useState<string>(''); //specify the type of the state variable as string
  const [previousNames, setPreviousNames] = useState<string[]>([]); //specify the type of the state variable as array of strings

  const increment = (): void => { //specify the return type of the function as void
    setCount(count + 1);
  }

  const decrement = (): void => {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle Counter Visibility</button>
      <div style={{
        border: '2px solid white',
        padding: 20,
        margin: 10,
        width: 200,
        backgroundColor: (open ? 'transparent' : 'white')
      }}>
        {open &&
          <>
            <p>{name && (name + `'s `)}Counter</p>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text" onChange={(e) => setNameInput(e.target.value)} value={nameInput} />
            <button onClick={() => {
              if (name) {
                setPreviousNames([...previousNames, name]);
              }
              setName(nameInput);
              setNameInput('')
            }}>
              Set Name
            </button>
          </>
        }
      </div>



      {previousNames.length > 0 &&
        <div style={{
          border: '2px solid blue',
          padding: 10,
          margin: 10,
          fontSize: 14,
          textAlign: 'left',
          backgroundColor: 'lightblue',
          color: 'blue'
        }}>
          <p>Previous Owners of the counter</p>
          <ul>
            {previousNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

export default Counter;
