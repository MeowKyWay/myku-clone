import { TextFieldType } from "../../../types/TextFieldType";
import { useState } from "react";
import TextField from "../../TextField";
import AuthUtils from "../../../utility/AuthUtils";
import awsconfig from "../../../aws-exports";
import axios from "axios";

function ManageTeacher() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addTeacher = async () => {
    const res = await axios.post('https://63tw46cuod.execute-api.ap-southeast-1.amazonaws.com/default/createTeacher',
      {
        UserPoolId: awsconfig.aws_user_pools_id,
        Name: name,
        Email: email
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'authorizationToken': await AuthUtils.getAuthToken()
        }
      }
    )

    console.log(res);
  }

  return (
    <div>
      <button onClick={addTeacher}>add teacher</button>
      <h1>Manage Teacher</h1>
      <TextField onChange={setName} value={name} type={TextFieldType.text}>
        name
      </TextField>
      <TextField onChange={setEmail} value={email} type={TextFieldType.text}>
        email
      </TextField>
    </div>
  );
}

export default ManageTeacher;
