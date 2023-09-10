import { useState, useEffect } from 'react'

//types / user.type.ts
type UserType = {
  email: string;
  picture: {
    large: string;
  }
}

//utils/getUserData.ts
type FetchData = {
  results: UserType[];
}

type returnType = [null | FetchData, null | unknown]

const getUserData = async (): Promise<returnType> => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json()

    return [data, null]
  } catch (e) {
    return [null, e]
  }
}

//modules/UserDataBlock.tsx
type Props = {
  email: string;
  picture: string;
  number: number;
}

function UserDataBlock({ email, picture, number }: Props) {
  return (
    <div data-number={`id: ${number}`} data-user={email}>
      <p> email: {email}</p>
      <img src={picture} width="100px" height="auto" />
    </div>
  )
}




export default function App() {
  const [userDataJSON, setUserDataJSON] = useState('');
  const [userDataArray, setUserDataArray] = useState<UserType[]>([]);
  const [counter, setCounter] = useState(0);

  const handleGetUserData = async () => {
    try {
      const [randomUserData, error] = await getUserData()

      if (error) {
        setUserDataJSON('Users not found!')
        return
      }
      if (randomUserData) {
        setUserDataJSON(JSON.stringify(randomUserData, null, 4))
        setUserDataArray(prevState => [...prevState, randomUserData.results[0]])
      }
    } catch (e) {
      setUserDataJSON('Users not found!')
    }
  }

  useEffect(() => {
    handleGetUserData()
  }, [])

  return (
    <>
      <p> {counter} </p>
      <button onClick={() => setCounter(counter + 1)}> Increment </button>

      {
        userDataArray.map((user: UserType, i: number) =>
          <UserDataBlock
            key={i}
            number={i}
            email={user.email}
            picture={user.picture.large}
          />
        )
      }
      <button onClick={() => handleGetUserData()}> Fetch another User </button>

      <pre>{userDataJSON}</pre>
    </>
  )
}