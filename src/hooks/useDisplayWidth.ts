import { setDisplayWidth } from "@/store/reducers/DisplayWidthSlice";
import { useEffect } from "react";
import { useAppDispatch } from "./redux";

const useDisplayWidth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setDisplayWidth(window.innerWidth));
    };

    const debounceResize = debounce(handleResize, 200);
    
    window.addEventListener('resize', debounceResize);
    
    // Устанавливаем начальное значение
    handleResize();

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, [dispatch]);
};

// Функция для дебаунсинга
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

export default useDisplayWidth;