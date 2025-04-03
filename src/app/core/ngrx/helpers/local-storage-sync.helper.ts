import { ActionReducer, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";

function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {
      keys: [
        'user'
      ],
      rehydrate: true
    }
  )(reducer);
};

export const META_REDUCER: MetaReducer<any>[] = [localStorageSyncReducer];