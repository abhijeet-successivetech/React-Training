"use client";

function useLocalStorage<T>(key: string, initialValue: T) {
  const getValue = (): T => {
    if (typeof window === "undefined") return initialValue;
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : initialValue;
  };

  const setValue = (newValue: T): void => {
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const remove = (): void => {
    localStorage.removeItem(key);
  };

  return { getValue, setValue, remove };
}

export default useLocalStorage;
