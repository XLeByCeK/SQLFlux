import React from "react";
import '../../styles/App.css';
import { Input, Button } from 'antd';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

const CodeInputArea = () => {

    return(

        <div className="InputFieldArea">

            <p className="InputFieldAreaText">Write your SQL code</p>

            <TextArea onChange={onChange} style={{height: 300}}></TextArea>

            <p className="InputFieldAreaText">or insert JSON file</p>

            <div className="InputFielAreaBtns">
                <Button className='InputFieldAreaBtn'size='large' color="default" variant="filled">Upload</Button>

                <Button className='InputFieldAreaBtn'size='large' color="primary" variant="filled">Generate</Button>
            </div>

        </div>

    )

}

export default CodeInputArea;