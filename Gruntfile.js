/* eslint-disable */

function getHockeyappConfig(grunt) {
  const token = grunt.option('token') || '';
  const file = grunt.option('file') || '';

  if (!token || !file) {
    return {};
  }

  const notes = grunt.option('notes') || '';
  const releaseType = grunt.option('releaseType') || '';
  const isIOS = file.lastIndexOf('.ipa') >= 0;
  const isAndroid = file.lastIndexOf('.apk') >= 0;
  const platform = isIOS ? 'ios' : (isAndroid ? 'android' : null);
  const notify = !!grunt.option('notify') ? 'all' : '';

  // Environment variable from JK
  const buildServerUrl = process.env.BUILD_URL;
  const commitSha = process.env.GIT_COMMIT;

  const config = {
    options: {
      downloadable: false,
      notes: notes,
      notesType: 'markdown',
      notify: notify,
      releaseType: releaseType,
      resource: 'upload',
      token: token
    }
  };

  if (platform) {
    config[platform] = {
      file: file
    };
  }

  if (buildServerUrl) {
    config.options.commitSha = commitSha;
  }

  return config;
}

function loadMobiTaskRunnerConfig(grunt, filePath) {
  var config;
  try {
    config = grunt.file.readJSON(filePath);
  } catch (e) {
    config = {};
  }

  return config;
}

function getMobiTaskRunnerCapabilities(config) {
  const capabilities = [];
  if (config.devices) {
    const devices = config.devices;

    for (var i = 0; i < devices.length; i++) {

    }
  }
}

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  
}
