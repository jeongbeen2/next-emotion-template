import * as SC from "@/styles/components/home/Home.styles";
import { FlexSC, TextSC } from "@/styles/components/global";
import useHooks from "@/src/hooks/useHooks";

const HomeContainer = () => {
  const [state] = useHooks();

  return (
    <SC.HomeWrapper>
      <FlexSC.FlexBox>
        <TextSC.SubTitle>home</TextSC.SubTitle>
      </FlexSC.FlexBox>
    </SC.HomeWrapper>
  );
};

export default HomeContainer;
