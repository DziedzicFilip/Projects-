import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { StronaGlowna } from './StronaGlowna/StronaGlowna.jsx';
import { Layout } from './Layout/Layout.jsx';
import { Oferta } from './Oferta/Oferta';
import { FilmView } from './FilmView/FilmView.jsx';
import { Wypozyczenie } from './Wypozyczenie/Wypozyczenie.jsx';
import { FAQ } from './FAQ/FAQ';
import { Regulamin } from './Regulamin/Regulamin';
import { Kontakt } from './Kontakt/Kontakt';
import { FilmViewGreen } from './FilmViewGreen/FilmViewGreen.jsx';
import { FilmViewIncepcja } from './FilmViewIncepcja/FilmViewIncepcja.jsx';
import { FilmViewLORD } from './FilmViewLORD/FilmViewLORD.jsx';
import { FilmViewSkazani } from './FilmViewSkazani/FilmViewSkazani.jsx';
import { Rejestracja } from './Rejestracja/Rejestracja.jsx';
import { Konto } from './Konto/Konto.jsx';
import { Zarzadzaj } from './Zarzadzaj/Zarzadzaj.jsx';
import { BorrowedMoviesProvider } from './BorrowedMoviesProvider';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><StronaGlowna/></Layout>,
    },
     {
            path: "/oferta",
            element: <Layout><Oferta/></Layout>,

    },
    {
        path: "/FilmView",
        element: <Layout><FilmView/></Layout>,

    },
    {
        path: "/Wypozyczenie",
        element: <Layout><Wypozyczenie /></Layout>,
    },
    {
        path: "/FAQ",
        element: <Layout><FAQ/></Layout>,
    },
    {
        path: "/Regulamin",
        element: <Layout><Regulamin/></Layout>,
    },
    {
        path: "/Kontakt",
        element: <Layout><Kontakt/></Layout>,
    },
    {
        path: "/FilmViewSkazani",
        element: <Layout><FilmViewSkazani /></Layout>,

    },
    {
        path: "/FilmViewLORD",
        element: <Layout><FilmViewLORD /></Layout>,

    },
    {
        path: "/FilmViewIncepcja",
        element: <Layout><FilmViewIncepcja/></Layout>,

    },
    {
        path: "/FilmViewGreen",
        element: <Layout><FilmViewGreen/></Layout>,

    },
    {
        path: "/Rejestracja",
        element: <Layout><Rejestracja/></Layout>,

    },
    {
        path: "/Konto",
        element: <Layout><Konto/></Layout>,

    },
    {
        path: "/Zarzadzaj",
        element: <Layout><Zarzadzaj/></Layout>,

    },

    

  


]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BorrowedMoviesProvider>  
            <RouterProvider router={router} />
        </BorrowedMoviesProvider>
    </React.StrictMode>
);
