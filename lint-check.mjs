import { execSync } from 'child_process';

// Consola
import { consola } from 'consola';

try {
  // Run eslint
  consola.info('Running link-check.mjs');
  consola.start('Running eslint...');
  execSync('npx eslint ./app', { stdio: 'inherit' });

  // If no errors, run the start:dev script
  consola.success('Eslint passed!');
} catch (error) {
  consola.error('Eslint failed. Please fix the following issues:', error);
  consola.warn(
    'If you believe this is a mistake, you can run command npm run lint to automatically fix some issues:\n',
  );
  process.exit(1);
}
