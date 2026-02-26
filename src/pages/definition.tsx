import CategoryDefinition from "@/features/definition/components/category";
import MenuDefinition from "@/features/definition/components/menu";
import PackageDefinition from "@/features/definition/components/package";

export default function DefinitionPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3xl h-full">
      <MenuDefinition />
      <CategoryDefinition />
      <PackageDefinition />
    </div>
  );
}
