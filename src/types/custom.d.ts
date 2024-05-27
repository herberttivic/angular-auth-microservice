// src/types/custom.d.ts

interface Env {
  protocol: string;
  apiroot: string;
  host: string;
  encryptType: string;
  saltMD5: string;
  port: string;
  context: string;
  gaTrackingId?: string;
  timeout?: number;
}

declare global {
  interface Window {
    env: Env;
  }
}

export {};
