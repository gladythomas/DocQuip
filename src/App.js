import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
// import Footer from './components/Footer';
function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {

    setData([
      ...data,
      {
        name: name,
        email: email
      }
    ])
    setName("");
    setEmail("");

  }

  const removeItem =(index) =>{
   let arr=data;
   arr.splice(index,1);
   setData([...arr]);
  }
  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={2}>

          <TextField
            value={name}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(event) =>
              setName(event.target.value)}
          />
          <TextField
            value={email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(event) =>
              setEmail(event.target.value)
            }

          />

          <Button
            variant="contained"
            color="success"
            onClick={addData}
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_value">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>
            <Button variant="contained" color="error">
              <DeleteIcon />
            </Button>
          </h4>
        </div>

        {
          data.map((element, index) => {
            return (
              <div className="data_value" key={index}>
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <h4>
                  <Button variant="contained" color="error" onClick={() => removeItem(index)}>
                    <DeleteIcon />
                  </Button>
                </h4>
              </div>
            )
          })

        }
      </div>
  
    </div>
  );
}

export default App;
