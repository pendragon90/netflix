import React from 'react';

function Footer() {
  return (
    <footer
      className="h-32 mt-14 bg-center bg-cover relative"
      style={{ backgroundImage: "url('/images/footer.png')" }}
      aria-label="Site Footer"
    >
      <div
        className="bg-black bg-opacity-50 absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-black to-transparent"
        aria-hidden="true"
      ></div>
      <section className="mx-5 mb-20 py-10 text-white flex gap-5 justify-center items-end h-full relative">
        <div className="text-center">
          <p>&copy; 2023 Netflix clone with ReactJs</p>
          <p>Created by Daffa Fahrizal</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
