import React, {useState} from 'react'
import './App.css'
import { Form, Input, Button, InputNumber } from 'antd';
import sentences from './sentences.json'

function App() {
  const [number, setNumber] = useState(undefined)
  const [sentence, setSentence] = useState(undefined)



  const handleFinish = (values) => {
    setNumber(values.number)
    console.log(sentences.data.length)
  }

  return (
    <div className="app">
      <Form name="number" onFinish={handleFinish}>
        <Form.Item label={"Put in a number here" + ` (max: ${sentences.data.length - 1}):`}
        name="number"
        >
          <InputNumber min={0} max={sentences.data.length - 1} />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">
            SHOW ME THE SENTENCE
          </Button>
        </Form.Item>
      </Form>

      {number !== null | undefined ? <div className='sentence'>
        <p>{sentences['data'][number]}</p>
      </div> : null}
    </div>
  );
}

export default App;
