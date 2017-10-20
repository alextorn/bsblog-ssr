/* eslint-disable global-require, import/no-unresolved, import/no-absolute-path */

import { locations } from 'config';

export const getChunks = modules => {
  const manifest = require('build/assets/modules.manifest.json');
  const chunks = new Set();

  modules.forEach(moduleId => {
    const moduleChunks = manifest.find(module => module.id === moduleId).chunks;
    moduleChunks.forEach(chunkId => chunks.add(chunkId));
  });

  return Array.from(chunks);
};

export const getAsset = asset => {
  if (__DEV__) {
    return `${locations.hotServerUrl}${locations.assetsPublicUrl}${asset}`;
  }
  const manifest = require('/build/assets/assets.manifest.json');
  return `${locations.assetsPublicUrl}${manifest[asset]}`;
};
