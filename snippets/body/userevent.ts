export let userevent = [
    "/**",
    " * @copyright © 2022, Oracle and/or its affiliates. All rights reserved.",
    " *",
    " * @NApiVersion 2.x",
    " * @NModuleScope Public",
    " * @NScriptType UserEventScript",
    " */",
    "",
    "import { EntryPoints } from \"N/types\";",
    "",
    "export function afterSubmit(context: EntryPoints.UserEvent.afterSubmitContext): void {}",
    "",
    "export function beforeSubmit(context: EntryPoints.UserEvent.beforeSubmitContext): void {}",
    "",
    "export function beforeLoad(context: EntryPoints.UserEvent.beforeLoadContext): void {}",
    ""
  ];