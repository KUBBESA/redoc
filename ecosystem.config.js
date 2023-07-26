module.exports = {
  apps: [
    {
      name: 'apidoc',
      script: 'npm',
      args: 'start:prod',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
