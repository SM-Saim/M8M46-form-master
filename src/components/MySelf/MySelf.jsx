import Pet from "../Pet/Pet";

const MySelf = ({ asset }) => {
  return (
    <div>
      <h2>My Self</h2>
      <section className="flex">
        <Pet asset={asset}></Pet>
      </section>
    </div>
  );
};

export default MySelf;
