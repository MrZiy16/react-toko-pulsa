
import '../styles/Product.css'; // Menghubungkan file CSS

function Pulsa() {
  // Membuat daftar nominal pulsa dari 5000 hingga 500000
  const nominalPulsa = [
    5000, 10000,15000, 20000, 25000, 50000, 100000, 150000, 200000, 300000, 500000,
  ];

  // Menambahkan harga (nominal + 1000)
  const pulsaList = nominalPulsa.map((nominal) => ({
    nominal,
    harga: nominal + 2000,
  }));

  // Fungsi untuk membuat pesan WhatsApp
  const createWhatsAppMessage = (nominal) => {
    const message = `Halo, saya ingin beli pulsa dengan nominal Rp ${nominal.toLocaleString()}.`;

    // Nomor WhatsApp (ganti dengan nomor yang sesuai)
    const phoneNumber = '6283168867815'; // Nomor WhatsApp Anda
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Membuat URL WhatsApp
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="pulsa-container">
      <h1 className="title">Daftar Pulsa</h1>
      <table className="pulsa-table">
        <thead>
          <tr>
            <th>Nominal Pulsa</th>
            <th>Harga</th>
            <th></th>
          
          </tr>
        </thead>
        <tbody>
          {pulsaList.map((pulsa, index) => (
            <tr key={index}>
              <td>Rp {pulsa.nominal.toLocaleString()}</td>
              <td>Rp {pulsa.harga.toLocaleString()}</td>
              <td>
                <a 
                  href={createWhatsAppMessage(pulsa.nominal)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="checkout-button"
                >
                  Beli
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pulsa;
