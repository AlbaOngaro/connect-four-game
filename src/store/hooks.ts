import {
  EqualityFn,
  useSelector as useRRSelector,
  useDispatch as useRRDispatch,
  Selector,
} from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

import { State, Action } from "./types";

export function useDispatch() {
  return useRRDispatch<Dispatch<Action>>();
}

export function useSelector<T = Partial<State>>(
  selector: Selector<State, T>,
  equalityFn?: EqualityFn<T>,
) {
  return useRRSelector(selector, equalityFn);
}
