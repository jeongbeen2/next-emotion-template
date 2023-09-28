import styled from "@emotion/styled";
import { FlexSC } from "@/styles/components/global";
import { color } from "@/styles/color";

export const NavWrapper = styled(FlexSC.FlexRow)`
  width: 100%;
  height: 100px;
  background-color: ${color.navy};
  color: ${color.white};
`;
