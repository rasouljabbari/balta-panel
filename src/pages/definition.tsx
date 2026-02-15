import CategoryDefinition from "@/features/definition/components/category";
import MenuDefinition from "@/features/definition/components/menu";
import PackageDefinition from "@/features/definition/components/package";

export default function DefinitionPage() {
  return (
    <div className="grid grid-cols-12 gap-3xl h-full">
      <div className="col-span-4">
        <MenuDefinition />
      </div>
      <div className="col-span-4">
        <CategoryDefinition />
      </div>
      <div className="col-span-4">
        <PackageDefinition />
      </div>
    </div>
  );
}
