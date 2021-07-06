import { Box } from "@material-ui/core";
import { ClassID } from "../../models";
import { ClassText } from "../../features/class/components/class-text";

export const HomePage = () => {
  return (
    <>
      <Box>Home Page</Box>
      <ClassText classID={ClassID.DeathKnight}>Death Knight</ClassText>
    </>
  );
};
