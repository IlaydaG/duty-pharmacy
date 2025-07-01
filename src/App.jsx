import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import PharmacyCard from './pharmacyCard';
import './App.css';


const cities = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin",
  "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur",
  "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan",
  "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul",
  "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli", "Kırşehir",
  "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş",
  "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas",
  "Şanlıurfa", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
];

function App() {
  const [currentDate, setCurrentDate] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [confirmedCity,setConfirmedCity] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('tr-TR');
    setCurrentDate(formattedDate);
  }, []);
  

  return (
    <div>
      <Navbar />
      
      <div className='title'>
        <h1>Nöbetçi eczane uygulamasına hoşgeldiniz.</h1>
        <p> {currentDate}</p>
      </div>
      <div className='container'>
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">-- İl seçiniz --</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>{city}</option>
          ))}
        </select>
        <button onClick={() => setConfirmedCity(selectedCity)}>Seçimi Onayla</button>
          {confirmedCity && <PharmacyCard city={confirmedCity} />}

      </div>
    </div>
  );
}

export default App;
