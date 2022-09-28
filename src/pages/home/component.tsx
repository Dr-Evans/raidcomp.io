import Box from "@mui/material/Box";
import { ClassID, ExpansionID } from "../../models";
import { ClassText } from "../../features/class/components/class-text";
import {
  ClassIcon,
  IconSize,
} from "../../features/class/components/class-icon";
import { WowheadTooltip } from "../../features/wowhead-tooltip";

export const HomePage = () => {
  return (
    <>
      <Box>Home Page</Box>
      <ClassText classID={ClassID.DeathKnight}>Death Knight</ClassText>
      <ClassIcon classID={ClassID.DeathKnight} size={IconSize.Large} />
      <WowheadTooltip
        expansion={ExpansionID.WrathOfTheLichKing}
        spellID={"49576"}
      >
        Hello
      </WowheadTooltip>
    </>
  );
};
