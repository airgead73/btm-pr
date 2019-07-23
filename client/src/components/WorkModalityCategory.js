import React from 'react';

const WorkModalityCategory = ({match}) => {
  return (
    <div>
      <h1>{match.params.modality} <small>{match.params.category}</small></h1>
    </div>
  );
};

export default WorkModalityCategory;