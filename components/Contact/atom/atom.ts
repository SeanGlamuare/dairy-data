import { atom } from "recoil";

export const contactSuccessState = atom<Boolean>({
	key: "contactSuccessState",
	default: false,
});
