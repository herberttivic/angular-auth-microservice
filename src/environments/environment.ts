import packageInfo from '../../package.json';

export const environment = {
  production: false,
  protocol: window.env.protocol,
  apiroot: window.env.apiroot,
  host: window.env.host,
  encryptType: window.env.encryptType,
  saltMD5: window.env.saltMD5,
  port: window.env.port,
  context: window.env.context,
  gaTrackingId: window.env.gaTrackingId,
  version: packageInfo.version,
};
