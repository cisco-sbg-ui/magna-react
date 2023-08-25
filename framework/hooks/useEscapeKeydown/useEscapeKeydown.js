import {useKeydown} from "../../index";

const useEscapeKeydown = (options) => {
  const {isEnabled, onKeydown} = options;
  useKeydown(["Escape"], onKeydown, isEnabled);
};

export default useEscapeKeydown;
