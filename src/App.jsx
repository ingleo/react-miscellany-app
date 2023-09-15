import { Counter } from './components/Counter';
import { Form } from './components/Form';
import { FormHook } from './components/FormHook';
import { InputMsg } from './components/InputMsg';
import { MultipleHook } from './components/MultipleHook';
import { Focus } from './components/Focus';
import { Layout } from './components/Layout';
import { CounterMemo } from './components/CounterMemo';
import { MemoHook } from './components/MemoHook';
import { CallbackHook } from './components/CallbackHook';

export const App = () => (
  <>
    <h1>Miscellany</h1>
    <hr className="border border-primary border-1 opacity-75" />
    <Counter />
    <hr className="border border-primary border-1 opacity-75" />
    <Form />
    <hr className="border border-primary border-1 opacity-75" />
    <InputMsg />
    <hr className="border border-primary border-1 opacity-75" />
    <FormHook />
    <hr className="border border-primary border-1 opacity-75" />
    <MultipleHook />
    <hr className="border border-primary border-1 opacity-75" />
    <Focus />
    <hr className="border border-primary border-1 opacity-75" />
    <Layout />
    <hr className="border border-primary border-1 opacity-75" />
    <CounterMemo />
    <hr className="border border-primary border-1 opacity-75" />
    <MemoHook/>
    <hr className="border border-primary border-1 opacity-75" />
    <CallbackHook />
  </>
);
