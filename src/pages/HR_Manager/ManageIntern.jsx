import React from 'react';
//components
import CampaignsList from "../../components/CampaignsList";
import CampaignData from "../../hooks/useFetchData";
//react-router-dom
import { useNavigate } from "react-router-dom";

function ManageIntern() {
  const navigate = useNavigate();
  const viewInternList = (id) => {
    //navigate to schedule page
    navigate(`/hrmanager/manage_intern/${id}`);
  }
  return (
      <CampaignData>
        {(campaigns) => <CampaignsList campaigns={campaigns} view={viewInternList} />}
      </CampaignData>
  );
}

export default ManageIntern;