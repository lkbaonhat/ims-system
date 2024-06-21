import React from 'react'
import CampaignData from '../../hooks/useFetchData';
import CampaignsList from '../../components/CampaignsList';
import { useNavigate } from 'react-router-dom';

export default function TranningProgram() {
  const navigate = useNavigate();
  const viewProgram = (id) => {
    //navigate to schedule page
    navigate(`/icoordinator/tranning_program/${id}`);
  }

  return (
    <CampaignData>
      {(campaigns) => <CampaignsList campaigns={campaigns} view={viewProgram} text="Detail"/>}
    </CampaignData>
  )
}
