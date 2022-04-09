/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
require('dotenv').config();

module.exports = (shipit) => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit);
  require('shipit-shared')(shipit);

  const appName = process.env.APP_NAME;

  shipit.initConfig({
    default: {
      deployTo: `/var/www/${appName}`,
      repositoryUrl: process.env.URL_REPOSITORY,
      keepReleases: 3,
      shared: {
        overwrite: true,
        files: ['.env.local', '.env'],
      },
      shallowClone: true,
    },
    staging: {
      servers: 'root@35.225.190.239',
      branch: 'dev',
    },
  });

  shipit.blTask('copyConfig', async () => {
    await shipit.copyToRemote('.env.local', `${shipit.releasePath}/.env.local`);
  });

  shipit.blTask('npm:install', async () => {
    const command = 'nvm use v16.14.0 && npm install --legacy-peer-deps';
    await shipit.remote(`cd ${shipit.releasePath} && ${command}`);
  });

  shipit.blTask('build:app', async () => {
    const command = 'nvm use v16.14.0 && npm run build';
    await shipit.remote(`cd ${shipit.releasePath} && ${command}`);
  });

  shipit.blTask('pm2:start', async () => {
    const command = `nvm use v16.14.0 && pm2 start npm --name "${appName}" -- start`;
    await shipit.remote(
      `nvm use v16.14.0 && pm2 stop ${appName} && pm2 delete ${appName}`
    );
    await shipit.remote(`cd ${shipit.releasePath} && ${command}`);
  });

  shipit.on('updated', async () => {
    shipit.start('copyConfig', 'npm:install', 'build:app');
  });

  shipit.on('published', () => {
    shipit.start('pm2:start');
  });
};
