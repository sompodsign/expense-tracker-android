import * as SecureStore from "expo-secure-store";

export async function getValueFor(key) {
    return await SecureStore.getItemAsync(key);
}

export async function deleteValueFor(key) {
    return await SecureStore.deleteItemAsync(key);
}


async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}


export const stripString = (string) => {
    if (string.length > 10) {
        return string.substring(0, 12) + "..";
    }
    return string;
}
