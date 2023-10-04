import { useSnack } from "../../../hooks/useSnack";
import { Head } from "../../../components/Head";
import { Snacks } from "../../../components/Snacks";
import { SnackTitle } from "../../../components/SnackTitle";

export const DrinksPage = () => {
  const { drinks } = useSnack();

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  );
};
