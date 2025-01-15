
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="image">
          <img
            src="https://img.freepik.com/free-vector/product-presentation-concept-illustration_114360-8416.jpg?t=st=1734061401~exp=1734065001~hmac=e3e3983ac37cf8e39404ff34f1bbd9d026a4659f1fdfa02a071fa85fbb090ead&w=740"
            alt="Product Presentation"
          />
        </div>
        <div className="text">
          <h1 className="title">Buat Mudah Untuk Penuhi Keperluan Anda</h1>
          <p>
            Kami menyediakan solusi terbaik untuk mempermudah kebutuhan Anda
            dengan layanan berkualitas dan mudah digunakan. Cobalah sekarang!
          </p>
          <a href='/paket internet ' className="cta-button">Ayo Lihat Product</a>
        </div>
      </div>

      <div className="about">
        <h2>Kenapa Kami?</h2>
        <p>
          Kami berkomitmen untuk memberikan pengalaman terbaik bagi pelanggan
          kami, dengan layanan yang cepat, efisien, dan selalu mengutamakan
          kepuasan Anda. Temukan berbagai fitur menarik yang dapat membantu Anda
          menyelesaikan kebutuhan Anda dengan mudah dan cepat.
        </p>
      </div>

      <div className="Services">
        <h2>Layanan</h2>
        <div className="services-list">

        <div className="feature-item">
          <h3>Product Digital</h3>
          <p>Melayani pembelian product digital PPOB</p>
        </div>
        <div className="feature-item">
          <h3>Helper Task (JOKI)</h3>
          <p>Membantu mengerjakan tugas pelanggan</p>
        </div>
        </div>
      </div>

    <div className="testimonials">
  <h2>Apa Kata Pengguna Kami?</h2>
  <div className="testimonials-wrapper">
    <div className="testimonial">
      <p>"Layanan yang luar biasa! Sangat mudah digunakan dan memberikan solusi cepat."</p>
      <h4>- Faiz123</h4>
    </div>
    <div className="testimonial">
      <p>"Saya sangat puas dengan fitur-fitur yang disediakan. Sangat membantu pekerjaan saya"</p>
      <h4>- Efan Gans</h4>
    </div>
    <div className="testimonial">
      <p>"Pelayanan pelanggan yang sangat ramah dan profesional. Terima kasih banyak!"</p>
      <h4>- Alfins</h4>
    </div>
    <div className="testimonial">
      <p>"Mantep!"</p>
      <h4>-Customer Setia</h4>
    </div>
    <div className="testimonial">
      <p>"Cepat Pelayanan , good"</p>
      <h4>- Mas Bro</h4>
    </div>
    <div className="testimonial">
      <p>"Pengerjaan cepat!"</p>
      <h4>-  Pengguna</h4>
    </div>
  </div>
</div>

<div className="contact">
  <h2>Hubungi Kami</h2>
  <p>Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami melalui WhatsApp:</p>
  <a href="https://wa.me/6283168867815" className="contact-button">
    Hubungi via WhatsApp
  </a>
</div>


     
    </>
  );
}

export default Home;