import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { selectedRegionId, regions } = useSelector((state) => ({
    selectedRegionId: state.selectedRegionId,
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectRegion(id));
  }

  return (
    <div>
      <h2>Restaurant Regions</h2>
      <Regions
        selectedRegionId={selectedRegionId}
        regions={regions}
        onClick={handleClick}
      />
    </div>
  );
}