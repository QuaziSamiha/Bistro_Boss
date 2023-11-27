function SectionTitle({ subHeading, heading }) {
  return (
    <>
      <div className="mx-auto text-center md:w-4/12 my-8">
        <h1 className="text-yellow-600 mb-2">---{subHeading}---</h1>
        <h1 className="text-4xl uppercase border-y-4 py-4">{heading}</h1>
      </div>
    </>
  );
}

export default SectionTitle;
