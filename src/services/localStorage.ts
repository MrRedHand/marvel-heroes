export const getLocalStorageData = (itemName: string) => {
  let localStorageValue: any = localStorage.getItem(itemName);
  if (localStorageValue !== null || undefined) {
    localStorageValue = JSON.parse(localStorageValue);
  }
  return localStorageValue !== null || undefined ? localStorageValue : [];
};

export const setLocalStorageData = (itemName: string, value: any) => {
  if (value !== undefined) {
    localStorage.setItem(itemName, JSON.stringify(value));
  }
};
