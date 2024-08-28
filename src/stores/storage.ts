import type { StateStorage } from 'zustand/middleware';
import { SecureStorage } from '@plasmohq/storage/secure';

export const Storage: StateStorage = {
    getItem: async (name: string): Promise<string | null> => {
        const storage = new SecureStorage();
        await storage.setPassword('password');
        const item = await storage.getItem(name);

        return item === undefined ? null : item;
    },
    setItem: async (name: string, value: string): Promise<void> => {
        const storage = new SecureStorage();
        await storage.setPassword('password');

        return storage.setItem(name, value);
    },
    removeItem: async (name: string): Promise<void> => {
        const storage = new SecureStorage();
        await storage.setPassword('password');

        return storage.removeItem(name);
    },
};
