import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

// Action creators
/*
 * RegionsContainer
 */
export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function selectRegion(id) {
  return {
    type: 'selectRegion',
    payload: {
      id,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

/*
 * CategoriesContainer
 */
export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function selectCategory(id) {
  return {
    type: 'selectCategory',
    payload: {
      id,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selectedRegionId, selectedCategoryId, regions } = getState();

    if (!selectedRegionId || !selectedCategoryId) {
      return;
    }

    const { name } = regions.find(({ id }) => id === selectedRegionId);

    const restaurants = await fetchRestaurants(name, selectedCategoryId);
    dispatch(setRestaurants(restaurants));
  };
}
