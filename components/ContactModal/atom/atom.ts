import { atom } from "recoil";

export const contactModalState = atom<Boolean>({
	key: "modalState",
	default: true,
});
