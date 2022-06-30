import * as SecureStore from "expo-secure-store";

export async function getValueFor(key) {
    return await SecureStore.getItemAsync(key);
}
