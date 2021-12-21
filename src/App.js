
import './App.css';
import firebaseConnect from './firebaseConnect'
import { getDatabase, ref, set , push, onValue, remove} from "firebase/database";
import React, { useState } from 'react';

function App(props) {
  const [Led, setLed] = useState("OFF");
  const [nhietdo, setNhietDo] = useState(20);

  function handleChange(e){
    const data = e.target.value;
    console.log(data);
    setNhietDo( data);
  }
  function HandleLed()
  {
    const db = getDatabase();
    const starCountRef = ref(db, 'MyDB2/');
    onValue(starCountRef, (snapshot) => {
      const data =snapshot._node.children_.root_.value.value_;
      console.log(data);
      setLed(data);
    });
  }
  function HandleNhietDo()
  {
    const db = getDatabase();
    set(ref(db, 'MyDB1/'), {
      NhietDo: nhietdo
    })
    .then(() => {
      console.log("Thêm thành công");
    })
    .catch((error) => {
      console.log("Thêm thất bại");
    });

  }
  return (
    <div>
      <div className='giua'>

        <div>
          <button onClick={HandleNhietDo} className='tach1'>Đưa Lên</button>
          <input type='text' name="form 1" value={nhietdo} onChange={(e)=>handleChange(e)}></input>
        </div>
        
        <div>
          <button onClick={HandleLed} className='tach2'>Đọc Về</button>
           <h2>{Led}</h2>
        </div>
       
      </div>
    </div>
  );
}

export default App;
