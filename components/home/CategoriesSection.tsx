import MainHeading from "../MainHeading";
import CategoriesList from "../categories/CategoriesList";

export default function CategoriesSection() {
  return (
    <section className="py-12">
      <MainHeading>Our Categories</MainHeading>
        <CategoriesList />
    </section>
  );
}
