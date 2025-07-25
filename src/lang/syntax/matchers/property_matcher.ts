import * as pt from "@xieyuheng/partech"
import type { Exp } from "../../exp/index.ts"
import * as Exps from "../../exp/index.ts"
import * as matchers from "./index.ts"

export function property_matcher(tree: pt.Tree): [string, Exp] {
  return pt.matcher<[string, Exp]>({
    "property:field_shorthand": ({ key }, { span }) => [
      matchers.key_matcher(key),
      Exps.Var(matchers.key_matcher(key), span),
    ],
    "property:field": ({ key, exp }) => [
      matchers.key_matcher(key),
      matchers.exp_matcher(exp),
    ],
  })(tree)
}
