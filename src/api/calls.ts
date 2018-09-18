import axios from 'axios';

export function readOrders(admin_jwt: string, item_count: number, skip_items: number) {
    const params = {query: {admin_jwt, item_count, skip_items}};

    return axios.post('/v1/read-all-orders', params)
        .then(res => res.data);
}

export function readUsers(admin_jwt: string, item_count: number, skip_items: number) {
    const params = {query: {admin_jwt, item_count, skip_items}};

    return axios.post('/v1/read-all-users', params)
        .then(res => res.data);
}