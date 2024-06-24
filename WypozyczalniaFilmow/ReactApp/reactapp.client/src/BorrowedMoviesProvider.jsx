/* eslint-disable react/prop-types */
import  { createContext, useState } from 'react';

export const BorrowedMoviesContext = createContext();


export const BorrowedMoviesProvider = ({ children }) => {
    const [borrowedMovies, setBorrowedMovies] = useState([]);

    const addBorrowedMovie = (movie) => {
        setBorrowedMovies([...borrowedMovies, movie]);
    };

    return (
        <BorrowedMoviesContext.Provider value={{ borrowedMovies, addBorrowedMovie }}>
            {children}
        </BorrowedMoviesContext.Provider>
    );
};
