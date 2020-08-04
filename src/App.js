import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/Upload-form/UploadForm";
import ImagesGrid from "./comps/images-grid/ImagesGrid";
import Modal from "./comps/modal/Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImagesGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
