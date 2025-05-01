import type { HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: Record<string, any>;
    }
  }
}
