#!/usr/bin/env node

var nopt = require( 'nopt' );
var exec = require( 'child_process' ).exec;

var command = 'bower install fansasstic fansasstic-boilerplate --save';
command += ' && mkdir -p sass';
command += ' && cp -R bower_components/fansasstic-boilerplate/src/* sass/';

exec( command, function (error, stdout, stderr) {
    console.log( "New Fansasstic project initialised." );
} );