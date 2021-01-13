import { Node } from "./draw";

export interface RenderButtonOptions {
  textContent: string;
  nodes: Node[];
  container?: HTMLElement;
}

export function renderButton(options: RenderButtonOptions) {
  const { container = document.querySelector("#root"), textContent } = options;

  const button: HTMLButtonElement = document.createElement("button");
  button.textContent = textContent;

  // TU MIAŁAM POMYSŁ ŻEBY ZRESETOWAĆ WSZYSTKIE NODY
  // TZN ZEBY ZNOWU SIE PRZELICZALY
  // CZYLI USTAWIC FX I FY NA NULL
  const buttonListener = () => {
    //   nodes.forEach((n: any) => {
    //     n.fx = null;
    //     n.fy = null;
    //   });
  };

  button.addEventListener("click", buttonListener);

  container && container.prepend(button);
}
