import React from 'react';


const WorkModalityCategory = ({match}) => {
  return (
    <>
    <h1>{match.params.modality} <small>{match.params.category}</small></h1>
    </>
  );
};

export default WorkModalityCategory; 