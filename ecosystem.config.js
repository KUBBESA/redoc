module.exports = {
  apps: [
    {
      name: 'apidoc',
      script: 'npm',
      args: 'webpack serve --env playground --mode=production --config demo/webpack.config.ts',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
