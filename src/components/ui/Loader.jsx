const Loader = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f8f8f8]">
      <video autoPlay loop muted playsInline className="h-20 w-20 object-contain">
        <source src="/loading.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Loader;
