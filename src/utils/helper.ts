export const convertDateString = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toDateString();
};
