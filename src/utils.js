import * as SecureStore from "expo-secure-store";

export async function getValueFor(key) {
    return await SecureStore.getItemAsync(key);
}

export const stripString = (string) => {
    if (string.length > 10) {
        return string.substring(0, 12) + "..";
    }
    return string;
}
