module.exports = function(grunt) {

  grunt.initConfig({

    aws: grunt.file.readJSON( 'aws-keys.json' ),
    
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>'
      },
      dist: {
        options: {
          bucket: 'david-proxy'
        },
        files: [
          {
            expand: true,
            cwd: 'public/',
            src: [ '**' ],
            dest: '/'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask( 'build', 'aws_s3:dist' );
};