"use client";
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import EventDetails from '../components/EventDetails';
import ConfirmAttendance from '../components/ConfirmAttendance';
import Map from '../components/Map';
import GuestList from '../components/GuestList';

export default function HomePage() {
  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <EventDetails />
            <ConfirmAttendance />
            <Map />
          </>
        } />
        <Route path="/listado" element={<GuestList />} />
      </Routes>
    </main>
  );
}
