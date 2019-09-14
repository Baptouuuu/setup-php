#!/bin/bash

set -e

PHP_VERSION=$(php -r 'echo PHP_MAJOR_VERSION.".".PHP_MINOR_VERSION;')

if [ "$PHP_VERSION" != "$1" ]; then
    exit 1
fi

php -v
composer --version
