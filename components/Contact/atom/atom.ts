import { atom } from "recoil";

export const contactSuccessState = atom<Boolean>({
	key: "contactSuccessState",
	default: false,
});

export const contactErrorState = atom<Boolean>({
	key: "contactErrorsState",
	default: false,
});
