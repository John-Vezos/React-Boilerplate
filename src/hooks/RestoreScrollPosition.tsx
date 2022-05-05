import { FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

const exceptionLocation: string | string[] = [];

const RestoreScrollPosition: FunctionComponent = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.addEventListener('beforeunload', windowBeforeUnloadHandler);

    const scrollY = localStorage.getItem('scrollBar');
    if (scrollY) {
      animateScroll.scrollTo(Number(scrollY), {
        duration: 800,
        delay: 100,
        offset: 0,
        smooth: 'easeInOutQuart',
      });

      localStorage.removeItem('scrollBar');
    }

    return () =>
      window.removeEventListener('beforeunload', windowBeforeUnloadHandler);
  }, []);

  useEffect(() => {
    if (scrollConditions()) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const scrollConditions = () => {
    return !exceptionLocation.includes(pathname);
  };

  const windowBeforeUnloadHandler = () =>
    localStorage.setItem('scrollBar', window.scrollY.toString());

  return null;
};

export default RestoreScrollPosition;
