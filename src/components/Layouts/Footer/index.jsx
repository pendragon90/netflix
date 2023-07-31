const Footer = () => {
  return (
    <div className="h-72 md:h-96 mt-5 bg-center bg-cover relative" style={{ backgroundImage: "url('/img/footer.webp')" }}>
      <footer className="bg-black bg-opacity-50 absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-black to-transparent">
        <div className="mx-5 py-10 text-white flex gap-5 justify-center items-end h-full">
          <div className="text-center">
            <p>&copy; 2023 Netflix clone with ReactJs</p>
            <p>Created by Daffa Fahrizal</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
