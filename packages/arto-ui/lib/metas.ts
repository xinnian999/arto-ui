import { splitNamespace } from "@arto-ui/utils";
import { componentGlobs } from "@arto-ui/components";

const metas = Object.entries(componentGlobs)
  .map(([k, v]) => {
    return { ...v.meta, name: splitNamespace(k) };
  })
  .filter((v) => v);

export default metas;
