import { useState } from "react";
import "./Product"; // Pastikan untuk mengimpor file CSS

function DetailTask() {
  const [jenisTugas, setJenisTugas] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format pesan untuk WhatsApp
    const message = `Jenis Tugas: ${jenisTugas}\nDeskripsi: ${deskripsi}\nPrice: Rp ${price}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=6283168867815&text=${encodeURIComponent(
      message
    )}`;

    // Arahkan ke WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Form Detail Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="jenisTugas">Jenis Tugas</label>
          <input
            type="text"
            id="jenisTugas"
            value={jenisTugas}
            onChange={(e) => setJenisTugas(e.target.value)}
            placeholder="Masukkan jenis tugas"
            required
          />
        </div>

        <div>
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea
            id="deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Masukkan deskripsi"
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Harga ditentukan penjual"
            readOnly
          />
        </div>

        <button type="submit">
          Kirim ke WhatsApp
        </button>
      </form>
    </div>
  );
}

export default DetailTask;
