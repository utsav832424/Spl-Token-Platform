import { Buffer } from "buffer";

window.Buffer = Buffer;
window.global = window;

if (!window.process) {
  window.process = { env: {} } as any;
}
