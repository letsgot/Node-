import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slicers/userSlice';
import { useEffect } from 'react';
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchUserProfile = async () => {
        try {
            let profile = await axios.get(`${baseUrl}profile`, { withCredentials: true });
            dispatch(setUser(profile?.data));
        } catch (error) {
            console.log(error.message)
            navigate('/login')
        }
    }

    useEffect(() => { fetchUserProfile() }, [])

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Body;