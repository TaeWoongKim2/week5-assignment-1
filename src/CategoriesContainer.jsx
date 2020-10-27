import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectCategory, loadRestaurants } from './actions';

import Categories from './Categories';

import { get } from './utils';

export default function CategoriesContainer() {
  // const { selectedCategoryId, categories } = useSelector((state) => ({
  //   selectedCategoryId: state.selectedCategoryId,
  //   categories: state.categories,
  // }));
  const categories = useSelector(get('categories'));
  const selectedCategoryId = useSelector(get('selectedCategoryId'));

  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(selectCategory(id));
    dispatch(loadRestaurants());
  }

  return (
    <Categories
      selectedCategoryId={selectedCategoryId}
      categories={categories}
      onClick={handleClick}
    />
  );
}
