import * as OutlineIcons from "@heroicons/react/24/outline";
import { UrlObject } from "url";

type ComponentChildren = React.ReactNode | React.ReactNode[];

type Href = string | UrlObject;

type IconName = keyof typeof OutlineIcons;

type Nullable<T> = T | null;

type ContextAction<A> = { type: A; payload: any };

type ProviderProps = { children: ComponentChildren };

type ProviderValue<S, D> = {
  store: S;
  dispatch: React.Dispatch<d>;
};
