import React from 'react';

const WorkModality = ({match}) => {
  console.log(match.params.modality);
  return (
    <>
    <h1>{match.params.modality}</h1>
    </>
  );
};

export default WorkModality; 