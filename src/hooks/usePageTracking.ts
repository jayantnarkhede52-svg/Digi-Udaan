import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../config/api';

export const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        api.trackPageView(location.pathname);
    }, [location.pathname]);
};
