// src/types/env.d.ts

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

interface Window {
  env: Env;
}
