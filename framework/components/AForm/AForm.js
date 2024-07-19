import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";

import {useCombinedRefs} from "../../utils/hooks";
import AFormContext from "../AForm/AFormContext";

const AForm = forwardRef(({children}, ref) => {
  const formRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, formRef);
  const [fields, setFields] = useState({});

  useImperativeHandle(combinedRef, () => ({
    reset: () => {
      Object.values(fields).forEach((x) => x.reset());
    },
    validate: () => {
      let errors = [];
      Object.values(fields).forEach((x) => {
        if (x.disabled) {
          x.reset();
          return;
        }

        let fieldError = x.validate();
        if (fieldError) {
          errors.push(fieldError);
        }
      });
      return errors;
    }
  }));

  const contextValue = {
    register: (id, field) => {
      setFields((currentFields) => {
        currentFields[id] = field;
        return currentFields;
      });
    },
    unregister: (id) => {
      setFields((currentFields) => {
        delete currentFields[id];
        return currentFields;
      });
    }
  };

  return (
    <AFormContext.Provider value={contextValue}>
      {children}
    </AFormContext.Provider>
  );
});

AForm.displayName = "AForm";

export default AForm;
