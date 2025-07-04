import MainHeading from "../MainHeading";
import CategoriesList from "../categories/CategoriesList";

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-12">
      <MainHeading>Our Categories</MainHeading>
      <CategoriesList />
    </section>
  );
}
