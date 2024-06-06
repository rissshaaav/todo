import {create} from 'zustand';

const userDataStore = (set) => ({
    userData: {
        name: '',
        username: '',
        email: '',
        profilePictureLink: '',
    },
    setUserData: (userData) => set({ userData }),
});

const useUserDataStore = create(userDataStore);
export default useUserDataStore;