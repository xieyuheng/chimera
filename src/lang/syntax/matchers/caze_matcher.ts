import * as pt from "@xieyuheng/partech"
import * as Exps from "../../exp/index.ts"
import * as Stmts from "../../stmt/index.ts"
import * as matchers from "./index.ts"

export function caze_matcher(tree: pt.Tree): Exps.Caze {
  return pt.matcher({
    "caze:caze": ({ pattern, stmts }, { span }) =>
      Exps.Caze(
        matchers.exp_matcher(pattern),
        matchers.stmts_matcher(stmts),
        span,
      ),
    "caze:caze_with_exp": ({ pattern, exp }, { span }) =>
      Exps.Caze(
        matchers.exp_matcher(pattern),
        [Stmts.Return(matchers.exp_matcher(exp), span)],
        span,
      ),
  })(tree)
}

export function cazes_matcher(tree: pt.Tree): Array<Exps.Caze> {
  return pt.matcher({
    "cazes:cazes": ({ cazes }) =>
      pt.matchers.zero_or_more_matcher(cazes).map(caze_matcher),
  })(tree)
}
