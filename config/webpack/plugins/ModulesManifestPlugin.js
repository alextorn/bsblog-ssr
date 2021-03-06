import fsx from 'fs-extra';
import path from 'path';

const isDevelopment = process.env.NODE_ENV !== 'production';

function ModulesManifestPlugin(options) {
  this.path = options.path;
  this.filename = options.filename;
}

ModulesManifestPlugin.prototype.apply = function ApplyModulesManifestPlugin(compiler) {
  compiler.plugin('done', stats => {
    const output = stats
      .toJson()
      .modules.map(({ id, name, chunks }) => ({ id, name, chunks }))
      .filter(module => !/^\.\/~\/*/.test(module.name)); // filtering out node_modules

    const outputPath = path.join(this.path, this.filename);
    const outputData = isDevelopment ? JSON.stringify(output, null, 2) : JSON.stringify(output);

    fsx.ensureDirSync(this.path);
    fsx.writeFileSync(outputPath, outputData);
  });
};

export default ModulesManifestPlugin;
