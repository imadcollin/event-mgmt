import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Profile from '../features/profiles/Profile';
// import Chat from '../features/messaging/Chat';
import ArtistsList from '../features/artists/ArtistsList';
import HallsList from '../features/halls/HallsList';
import EventList from '../features/events/EventList';
import Inbox from '../features/messaging/Inbox';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />

        {/* <Route path="/chat" element={<Chat />} /> */}
        <Route path="/artists" element={<ArtistsList />} />
        <Route path="/halls" element={<HallsList />} />
        <Route path="/events" element={<EventList />} />
        {/* <Route path="/inbox" element={<Inbox />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;