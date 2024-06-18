import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Typography, Box, InputAdornment } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { imgDB, pdfDB } from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const FormPage = ({ title, formFields, buttonText, onFormSubmit, displayUpload }) => {

  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, type } = e.target;
    let value = type === "file" ? e.target?.files[0] : e.target?.value;
    console.log(name);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
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
            () => {},
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
      onFormSubmit(formData);
    } catch (error) {
      console.log(error.message);
    } 
  };

  return (
    <Box>
      <Typography variant="h4" textAlign="center">{title}</Typography>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <TextField
            key={field.name}
            fullWidth
            margin="normal"
            type={field.type}
            multiline={field.multiline || false}
            rows={field.rows || 1}
            name={field.name}
            label={field.label}
            onChange={handleChange}
            required={field.required}
          />
        ))}
        {displayUpload && (
          <TextField
            fullWidth
            margin="normal"
            type="file"
            name="file"
            accept=".pdf,image/*"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CloudUploadIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
        <Button type="submit" variant="contained" fullWidth>{buttonText}</Button>
      </form>
    </Box>
  );
};

FormPage.propTypes = {
  title: PropTypes.string.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonText: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  displayUpload: PropTypes.bool,
};

FormPage.defaultProps = {
  displayUpload: false,
};

export default FormPage;