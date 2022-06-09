import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue, parser) {
  const saved = window.localStorage.getItem(key);
  return saved !== null ? parser(saved) : parser(defaultValue);
}

export const useStorageInt = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue, parseInt);
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export const useStorageString = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue, (x) => {return x;});
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export const useStorageFloat = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue, parseFloat);
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export const useStorageBool = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue, (x) => {return Boolean(x);});
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};


export const useLocalStorageBoolean = (key, defaultValue = false) => {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        if (saved !== false) {
            return JSON.parse(saved);
        }
        return defaultValue;
    });

    useEffect(() => {
        const rawValue = JSON.stringify(value);
        localStorage.setItem(key, rawValue);
    }, [value]);

    return [value, setValue]
};