import * as OutlineIcons from "@heroicons/react/24/outline";
import { UrlObject } from "url";

export type ComponentChildren = React.ReactNode | React.ReactNode[];

export type Href = string | UrlObject;

export type IconName = keyof typeof OutlineIcons;

export type Nullable<T> = T | null;

export type ContextAction<A> = { type: A; payload: any };

export type ProviderProps = { children: ComponentChildren };

type ProviderValue<S, D> = {
  store: S;
  dispatch: React.Dispatch<d>;
};
