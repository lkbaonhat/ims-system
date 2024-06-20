import React, { createContext, useState, useContext } from "react";
import { imgDB, pdfDB } from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Create a context
const ModalContext = createContext();

// Create a provider component
export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);

  const handleOpen = (initialFormData) => {
    setFormData(initialFormData);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  const handleChange = (e) => {
    const { name, type } = e.target;
    let value = type === "file" ? e.target?.files[0] : e.target?.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, onSubmit) => {
    e.preventDefault();
    try {
      //Check if formData contains a file to upload
      if (formData.file) {
        //Determine the appropriate storage path based on the file type
        const db = formData.file.type === "application/pdf" ? pdfDB : imgDB;
        //Create  a storage reference
        const storageRef = ref(
          db,
          `${formData.file.type}s/${formData.file.name}`
        );
        //Start the upload
        const uploadTask = uploadBytesResumable(storageRef, formData.file);
        //Wait for the upload to complete
        const downloadURL = await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {},
            (error) => reject(error),
            async () => {
              //Upload completed successfully, now we can get the download URL
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            }
          );
        });
        //Add the download URL to the formData
        formData.file = downloadURL;
      }
      onSubmit(formData) 
      setAlertOpen(true);
    } catch (error) {
      console.log(error.message);
    } finally {
      handleClose();
    }
  };

  

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        alertOpen,
        setAlertOpen,
        handleOpen,
        handleClose,
        formData,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Create a custom hook to use the ModalContext
export const useModalContext = () => {
  return useContext(ModalContext);
};
