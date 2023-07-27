import RecipeDetails from "../../components/recipeDetails/recipeDetails";
import Navigation from "../../components/navigation/navigation";
import useSWR from "swr";
import { useRouter } from "next/router";
// import Layout from "../../components/layout/layout";

export default function RecipeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/recipes/${id}` : null);

  if (!data) {
    return (
      <>
        <Navigation />
        <h1>Loading...</h1>;
      </>
    );
  }
  return (
    <>
      <Navigation />
      {/* <Layout> */}
      <RecipeDetails data={data} />;{/* </Layout> */}
    </>
  );
}
