export function Spinner() {
  return (
    <>
      <div className="absolute backdrop-blur-md z-[9999] absolute top-0 left-0 w-screen h-screen"></div>
      <div className="absolute z-[9999] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <img
          class="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/70469/loading.svg"
          alt="Loading icon"
        />
      </div>
    </>
  );
}
