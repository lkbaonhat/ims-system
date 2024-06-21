import React from 'react'
import { Box } from '@mui/material'
import FormPage from '../../components/FormPage'

export default function CreateTP() {
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState('');

    const tpFields = [
        { name: 'program_name', label: 'Tranning program name', type: 'text', multiline: true, rows: 2 },
        { name: 'description', label: 'Description', type: 'text', multiline: true, rows: 5 },
        { name: 'objectives', label: 'Objectives', type: 'text', multiline: true, rows: 4 },
        { name: 'endDate', label: '', type: 'date'  },
    ]

    const handleFormSubmit = async (formData) => {
        console.log('Form Data:', formData);
    }

  return (
    <Box 
    height="80vh"
    bgcolor="white"
    p="5px 30px"
    m="10px 20px"
    borderRadius="30px">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <FormPage title='Create tranning program' formFields={tpFields} buttonText="Create" onFormSubmit={handleFormSubmit} displayUpload={false}/>
    </Box>
  )
}
