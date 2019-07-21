import React from 'react';

const WorkModality = ({match}) => {
  return (
    <div>
      <h1>{match.params.modality} </h1>
    </div>
  );
};

export default WorkModality;