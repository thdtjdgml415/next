import ListItem from "../../components/List/ListItem";

export const dynamic = "force-dynamic";

export default async function List() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-4/5 max-w-2xl">
        <h2 className="text-center font-bold antialiased text-4xl mt-20 mb-10">
          List
        </h2>
        <section className="list-bg">
          <ListItem />
        </section>
      </div>
    </div>
  );
}
