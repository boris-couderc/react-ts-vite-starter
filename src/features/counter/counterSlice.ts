import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '~/app/store'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement(state) {
      if (state.value === 0) return
      state.value -= 1
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCounterValue = (state: RootState) => state.counter.value

export default counterSlice.reducer