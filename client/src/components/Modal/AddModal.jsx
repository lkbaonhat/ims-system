import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useModalContext } from "../../context/ModalContext";

const AddPeopleForm = ({ peopleOptions, onPersonChange, person }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedPeople, setSelectedPeople] = useState([]);
  
    const handleAddPerson = (event, newValue) => {
      setSelectedPeople(newValue);
      onPersonChange(newValue);
    };

  return (
    <Box sx={{ width: 400, padding: 2 }}>
      <Autocomplete
        multiple
        freeSolo
        options={peopleOptions.map(option => option.label)}
        value={selectedPeople}
        onChange={handleAddPerson}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} label="Names or emails" placeholder="e.g., Maria, maria@company.com" variant="outlined" fullWidth />
        )}
        sx={{ mt: 2 }}
      />
    </Box>
  );
};

const ModalAdd = () => {
  const { modalOpen, formData, handeClose } = useModalContext();
  const [person, setPerson] = useState("");

  const handleAddPerson = () => {
    formData.onSubmit({ person });
    handeClose();
  };

  return (
    <Dialog open={modalOpen} onClose={handeClose}>
      <DialogTitle>{formData.title}</DialogTitle>
      <DialogContent>
        <AddPeopleForm
          peopleOptions={formData.peopleOptions}
          person={person}
          onPersonChange={setPerson}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handeClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddPerson} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAdd;
