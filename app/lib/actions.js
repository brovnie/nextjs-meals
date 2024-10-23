'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function isInvalidData(data) {
  return !data || data.trim() === '';
}

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };
  if (
    isInvalidData(meal.title) ||
    isInvalidData(meal.summary) ||
    isInvalidData(meal.instructions) ||
    isInvalidData(meal.creator) ||
    isInvalidData(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid data',
    };
  }
  revalidatePath('/meals');
  redirect('/meals');
};
