import type { HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: HTMLAttributes<HTMLElement>;
    }
  }
}
