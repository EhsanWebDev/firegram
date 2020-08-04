import React, { useState, useEffect } from "react";
import { storage, projectFirestore, timestamp } from "../firebase/config";

const useStorage = (file) => {
  const [percentage, setPercentage] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setPercentage(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        let url_down = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({
          url: url_down,
          createdAt,
        });
        setUrl(url_down);
      }
    );
  }, [file]);
  return { percentage, error, url };
};

export default useStorage;
