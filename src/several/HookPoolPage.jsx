import { useState } from 'react';

import { VerticalNavBar } from '../layout/VerticalNavBar';
import {
  Counter,
  Form,
  InputMsg,
  FormHook,
  MultipleHook,
  Focus,
  Layout,
  CounterMemo,
  MemoHook,
  CallbackHook,
} from '../components';

export const HookPoolPage = () => {
  const [activeExample, setActiveExample] = useState('counter');

  let hookExample = <></>;
  switch (activeExample) {
    case 'customHook':
      hookExample = <Counter />;
      break;
    case 'useEffect':
      hookExample = <Form />;
      break;
    case 'eventListener':
      hookExample = <InputMsg />;
      break;
    case 'customFormHook':
      hookExample = <FormHook />;
      break;
    case 'multipleHooks':
      hookExample = <MultipleHook />;
      break;
    case 'useRef':
      hookExample = <Focus />;
      break;
    case 'useLayoutEffect':
      hookExample = <Layout />;
      break;
    case 'reactMemo':
      hookExample = <CounterMemo />;
      break;
    case 'useMemo':
      hookExample = <MemoHook />;
      break;
    case 'useCallback':
      hookExample = <CallbackHook />;
      break;
    default:
      hookExample = <></>;
      break;
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <VerticalNavBar
            onChangeExample={setActiveExample}
            activeExample={activeExample}
          />
        </div>
        <div className="col-lg-9">{hookExample}</div>
      </div>
    </>
  );
};
