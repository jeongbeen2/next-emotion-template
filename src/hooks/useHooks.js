import { useEffect, useState } from "react";
import { dummyScript } from "@/js/script";

const useHooks = () => {
  const [state, setState] = useState();

  useEffect(() => {
    setState(dummyScript());
  }, []);

  return [state];
};

export default useHooks;
