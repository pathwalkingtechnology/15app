import Header from '../components/Header';
import EventDetails from '../components/EventDetails';
import ConfirmAttendance from '../components/ConfirmAttendance';
import Map from '../components/Map';

export default function HomePage() {
  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <Header />
      <EventDetails />
      <ConfirmAttendance />
      <Map />
    </main>
  );
}
