module.exports = function(grunt) {

  grunt.initConfig({

    aws: grunt.file.readJSON( 'aws-keys.json' ),
    
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
        region: 'us-west-1',
      },
      dist: {
        options: {
          // region: 'US West',
          bucket: 'david-proxy',
        },
        files: [
          {
            expand: true,
            cwd: 'public/',
            src: [ '**' ],
            dest: '/',
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask( 's3', 'aws_s3:dist' );
};