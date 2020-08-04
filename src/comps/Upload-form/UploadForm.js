import React, { useState } from "react";
import Progress from "../progress-bar/Progress";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/jpeg", "image/png"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select jpeg or png format for images");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>

      <div className="output">
        {file && <div> {file.name} </div>}
        {error && <div className="error"> {error} </div>}
        {file && <Progress file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
