module.exports = {
  apps: [
    {
      name: 'Crediviva API Docs',
      script: 'http-server',
      args: '-p 8888',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
