function BackgroundImage() {
  return (
    <div className="relative  bg-[url(../../images/hero-background.jpg)] bg-cover bg-center w-full h-screen">
      {/* <img
        className="w-full h-screen object-cover object-center"
        src="../../images/hero-background.jpg"
        alt=""
      /> */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top right, rgba(30, 58, 138, 0.7) 0%, rgba(30, 58, 138, 0.0) 70%)",
        }}
      />
    </div>
  );
}

export default BackgroundImage;
