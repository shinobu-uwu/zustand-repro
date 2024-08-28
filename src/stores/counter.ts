import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Storage } from '~/stores/storage';

export type CounterState = {
    count: number;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    increment: () => void;
    decrement: () => void;
};

export const useCounterStore = create<CounterState>()(
    persist(
        (set) => ({
            count: 0,
            loading: true,
            setLoading: (loading) => set({ loading }),
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
        }),
        {
            name: 'counter',
            storage: createJSONStorage(() => Storage),
            onRehydrateStorage: (state) => state.setLoading(false),
        }
    )
);
