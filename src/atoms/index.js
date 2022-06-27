import AsyncStorage from '@react-native-async-storage/async-storage';
import {atom, DefaultValue} from "recoil";

function persistAtom(key){
  return ({setSelf, onSet}) => {
    setSelf(AsyncStorage.getItem(key).then(savedValue =>
      savedValue != null
        ? JSON.parse(savedValue)
        : new DefaultValue() // Abort initialization if no value was stored
    ));

    // Subscribe to state changes and persist them to localForage
    onSet((newValue, _, isReset) => {
      isReset
        ? AsyncStorage.removeItem(key)
        : AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  };
}

export const commentsAtom = atom({
    key: 'comments', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value),
    effects_UNSTABLE: [persistAtom('comments')],
});


export const instructAtom = atom({
    key: 'instruct', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value),
    effects_UNSTABLE: [persistAtom('instruct0')],
});