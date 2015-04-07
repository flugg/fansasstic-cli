#!/usr/bin/env node

var cli = require( 'cli' );
var exec = require( 'child_process' ).exec;

cli.parse(
{
    sass:   [ 's', 'Specify the path of the Sass files', 'path', 'sass'],
    plain:  [ 'p', 'Initializes a plain project with no boilerplate' ],
    css:    [ 'c', 'Specify the path of the compiled CSS file', 'path', 'css'],
    name:   [ 'n', 'Specify the name of the compiled CSS file', 'string', 'application'],
},
[ 'new', 'compile' ] );

cli.main(function ( args, options ) {
    if ( cli.command == 'new' ) {
        var newCommand;
        var sassPath = options.sass;
        if ( options.plain ) {
            newCommand = 'bower install fansasstic --save';
        } else {
            newCommand = 'bower install fansasstic fansasstic-boilerplate --save';
            newCommand += ' && mkdir -p ' + sassPath;
            newCommand += ' && cp -R bower_components/fansasstic-boilerplate/src/* ' + sassPath;
        }
        exec( newCommand, function ( error, stdout, stderr ) {
            cli.ok( 'Fansasstic project initialised.' );
        } );
    } else if ( cli.command == 'compile' ) {
        var cssPath = options.css;
        var cssName = options.name;
        if ( cssName.substr( 0, 4 ) == '.css' ) {
            cssName = ref.substr( 4 );
        }
        var compileCommand = 'mkdir ' + cssPath + ' && sass sass/manifest.scss ' + cssPath + '/' + cssName + '.css';
        exec( compileCommand, function ( error, stdout, stderr ) {
            cli.ok( 'Sass compiled.' );
        } );
    }
} );