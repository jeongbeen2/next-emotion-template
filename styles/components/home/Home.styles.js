import styled from "@emotion/styled";
import { FlexSC } from "@/styles/components/global";
import { color } from "@/styles/color";

export const HomeWrapper = styled(FlexSC.FlexBox)`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: ${color.gray};
`;
