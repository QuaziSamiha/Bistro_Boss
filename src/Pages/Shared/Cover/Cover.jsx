function Cover({ img, title }) {
  return (
    <>
      <div className="h-[700px]" style={{ backgroundImage: `url("${img}")` }}>
        <div className="bg-opacity-60"></div>
        <div className="text-center text-neutral-200">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              pariatur dolores ipsam repellat odio corrupti quo impedit eius!
              Magni, modi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cover;
