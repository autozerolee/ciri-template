import {incrementAsync} from '../sagas';
import { call, delay, put } from 'redux-saga/effects';


describe('test increment async', () => {
  const gen = incrementAsync();
  test("delay 1000.", () => {
    expect(gen.next().value).toStrictEqual(delay(1000));
  });
  
  test("dispatch Increment Action.", () => {
    const _gen = gen.next().value;
    expect(_gen.payload.action).toStrictEqual({type: "INCREMENT"});
  });

  test("saga be done", () => {
    const _gen = gen.next();
    expect(_gen.value).toBeUndefined();
    expect(_gen.done).toBe(true);
  });
})
