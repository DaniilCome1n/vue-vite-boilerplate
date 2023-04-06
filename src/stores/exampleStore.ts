import { defineStore } from 'pinia';
import { IExampleStoreState } from '@/types/IExampleStoreState';

export const useExampleStore = defineStore('exampleStore', {
  state: (): IExampleStoreState => ({
    exampleCount: 777,
  }),
  getters: {},
  actions: {},
});
