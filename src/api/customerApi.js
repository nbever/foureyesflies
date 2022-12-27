import {JSON_HEADER} from './constants';
import authFetch from './authFetch';

export const initiateBuildingCustomerList = async () => {

    const response = await authFetch('/api/buildcustomerlist', {
        method: 'POST',
        headers: JSON_HEADER
    });

    return response;
};

export const getCustomers = async () => {
    const response = await authFetch('/api/customers', {
        method: 'GET',
        headers: JSON_HEADER
    });

    return response;
};

export const getRFEs = (subid) => {
    return async () => {
        const response = await authFetch(`/api/customer/${subid}/rfes`, {
            method: 'GET',
            headers: JSON_HEADER
        });
    };
};