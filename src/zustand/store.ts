import { create } from 'zustand';
import type { TimelineLocation } from '@_types/timeline';

// TimelineTarget 타입 확장
export interface TimelineTarget {
  name: string;
  image?: any;
  status?: string;
  date?: string;
}

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

interface TimelineState {
  title: string;
  category: string;
  target: TimelineTarget | null;
  date: string | null;
  location: TimelineLocation | null;
  content: string;
  setTitle: (title: string) => void;
  setCategory: (category: string) => void;
  setTarget: (target: TimelineTarget | null) => void;
  setDate: (date: string | null) => void;
  setLocation: (location: TimelineLocation | null) => void;
  setContent: (content: string) => void;
  reset: () => void;
}

export const useTimelineStore = create<TimelineState>()((set) => ({
  title: '',
  category: '',
  target: null,
  date: null,
  location: null,
  content: '',
  setTitle: (title) => set({ title }),
  setCategory: (category) => set({ category }),
  setTarget: (target) => set({ target }),
  setDate: (date) => set({ date }),
  setLocation: (location) => set({ location }),
  setContent: (content) => set({ content }),
  reset: () =>
    set({ title: '', category: '', target: null, date: null, location: null, content: '' }),
}));
