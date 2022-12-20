import React, { useEffect, useReducer } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { getError } from '../utils';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {...state, loading: true}
        case 'FETCH_SUCCESS':
            return {
                ...state,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages,
                countProducts: action.payload.countProducts,
                loading: false,
            }
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload };
        default:
            return state
        }
}
export default function SearchPage() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const category = sp.get('category') || 'all';
    const query = sp.get('query') || 'all';
    const rating = sp.get('rating') || 'all';
    const order = sp.get('page') || 'newest';
    const page = sp.get('page') || 1;

    const [{ loading, error, products, pages, countProducts }, dispatch] = 
        useReducer(reducer, {
            loading: true,
            error: '',
        })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    /api/products/search?page=${page}&query=${query}&category=${category}&price${price}&rating=${rating}&order=${order}
                )
                dispatch({type: 'FETCH_SUCESS', payload: data});
            } catch (err) {
                dispatch({
                    type: 'FETCH_FAIL',
                    payload: getError(error)
                })
            }
        };
        fetchData();
    }, [category, error, order, page, price, query, rating])

    return (
        <div></div>
    )
}