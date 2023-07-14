export const appLocalStorage = {
  themeMode: {
    key: 'themeMode',
    get(): 'light' | 'dark' | null {
      const storeValue = localStorage.getItem(this.key);

      if (storeValue === 'light' || storeValue === 'dark') {
        return storeValue;
      }

      return null;
    },
    set(value: 'light' | 'dark') {
      localStorage.setItem(this.key, value);
    }
  }
};
