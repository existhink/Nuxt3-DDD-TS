// Consola
import { consola } from 'consola';

// File System
import fs from 'fs';

// Path
import path from 'path';

const args = process.argv.slice(2);

if (args.length === 0) {
  consola.error('Please provide a module name.');
} else {
  consola.start('Creating module directory structure...');
  const moduleName = args[0];
  let capitalizeModuleName;

  // ? We need still to check if the module name is contained more than one word or module name is camel case. Then, we need to convert it to kebab case.
  const kebabCaseModuleName = moduleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  const modulePath = path.join('app', 'src', 'modules', kebabCaseModuleName);

  if (kebabCaseModuleName) {
    // ? We need to change kebab-case into capital case
    capitalizeModuleName = kebabCaseModuleName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }

  try {
    fs.mkdirSync(modulePath, { recursive: true });
    const listFolderNames = ['components', 'constants', 'interfaces', 'routes', 'services', 'stores', 'views'];

    // Create seperates folders and files
    listFolderNames.forEach(folderName => {
      fs.mkdirSync(path.join(modulePath, folderName));

      switch (folderName) {
        case 'components':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, '.gitkeep'), 'w'));
          break;
        case 'constants':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `index.ts`), 'w'));
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `${kebabCaseModuleName}.constant.ts`), 'w'));
          fs.closeSync(
            fs.openSync(path.join(modulePath, folderName, `${kebabCaseModuleName}.api.constant.ts`), 'w'),
          );
          break;
        case 'interfaces':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `${kebabCaseModuleName}.interface.ts`), 'w'));
          break;
        case 'routes':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `${kebabCaseModuleName}.route.ts`), 'w'));
          break;
        case 'services':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `${kebabCaseModuleName}.service.ts`), 'w'));
          break;
        case 'stores':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `${kebabCaseModuleName}.store.ts`), 'w'));
          break;
        case 'views':
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, `${capitalizeModuleName}UI.vue`), 'w'));
          break;
        default:
          fs.closeSync(fs.openSync(path.join(modulePath, folderName, 'index.ts'), 'w'));
          break;
      }
    });

    consola.success(`Module "${moduleName}" directory structure created successfully. Let's check it out!`);
  } catch (err) {
    consola.error(`Error creating module "${moduleName}": ${err}`);
  }
}
